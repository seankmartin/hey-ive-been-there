from PIL import Image
import numpy as np

import argparse


def invert_jpg(input_path, output_path):
    # Load image and convert to grayscale
    img = Image.open(input_path).convert("L")  # 'L' mode is for grayscale

    # Convert to NumPy array
    img_array = np.array(img)

    # Apply binary threshold
    binary_array = np.where(img_array == 0, 255, 0).astype(np.uint8)

    # Convert binary array back to image
    binary_img = Image.fromarray(binary_array, mode="L")

    # Save the binary image as JPG
    binary_img.save(output_path, format="JPEG")
    print(f"Saved binary image to {output_path}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Binarize a JPG image.")
    parser.add_argument("input_path", type=str, help="Path to the input JPG image")
    parser.add_argument("output_path", type=str, help="Path to save the binary image")

    args = parser.parse_args()

    invert_jpg(args.input_path, args.output_path)
