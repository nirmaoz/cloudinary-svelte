<script>
  /**
   * Cloudinary Image Component
   */

  export let public_id;
  export let cloud_name;

  function getAttributes() {
    let { public_id, cloud_name, ...attributes } = $$props;
    attributes.src =
      attributes.src ||
      `https://res.cloudinary.com/${cloud_name}/image/upload/${public_id}`;
    attributes.alt = attributes.alt || "Image";

    return attributes;
  }
</script>

<img {...getAttributes()} />
