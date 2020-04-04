<script>
  /**
   * Cloudinary Video Component
   */

  export let public_id;
  export let cloud_name;

  function getAttributes() {
    let { public_id, cloud_name, ...attributes } = $$props;
    attributes.src =
      attributes.src ||
      `https://res.cloudinary.com/${cloud_name}/video/upload/${public_id}`;

    return attributes;
  }
</script>

<video {...getAttributes()} />
