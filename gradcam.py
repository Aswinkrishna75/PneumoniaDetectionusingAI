import tensorflow as tf
import numpy as np
import cv2
import os

def make_gradcam_heatmap(img_array, model, last_conv_layer_name):

    grad_model = tf.keras.models.Model(
        [model.inputs],
        [model.get_layer(last_conv_layer_name).output,
         model.output]
    )

    with tf.GradientTape() as tape:

        conv_outputs, predictions = grad_model(img_array)

        loss = predictions[:, 0]

    grads = tape.gradient(loss, conv_outputs)

    pooled_grads = tf.reduce_mean(grads, axis=(0,1,2))

    conv_outputs = conv_outputs[0]

    heatmap = conv_outputs @ pooled_grads[..., tf.newaxis]

    heatmap = tf.squeeze(heatmap)

    heatmap = tf.maximum(heatmap,0)

    heatmap /= tf.reduce_max(heatmap)

    return heatmap.numpy()


def save_gradcam(filepath, model):

    img = tf.keras.preprocessing.image.load_img(
        filepath,
        target_size=(224,224)
    )

    img_array = tf.keras.preprocessing.image.img_to_array(img)

    img_array = np.expand_dims(img_array, axis=0)

    img_array = img_array /255.0

    heatmap = make_gradcam_heatmap(
    img_array,
    model,
    "conv2d_2"
)

    original = cv2.imread(filepath)

    original = cv2.resize(original,(224,224))

    heatmap = cv2.resize(heatmap,(224,224))

    heatmap = np.uint8(255*heatmap)

    heatmap = cv2.applyColorMap(
        heatmap,
        cv2.COLORMAP_JET
    )

    superimposed = cv2.addWeighted(
        original,
        0.6,
        heatmap,
        0.4,
        0
    )

    os.makedirs("heatmaps",exist_ok=True)

    filename = os.path.basename(filepath)

    save_path = os.path.join(
        "heatmaps",
        filename
    )

    cv2.imwrite(save_path,superimposed)

    return save_path