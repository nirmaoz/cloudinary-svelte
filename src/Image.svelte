<script>
  export let public_id;
  export let cloud_name;
  export let src;
  export let alt="Image";

	$: src = src || `https://res.cloudinary.com/${cloud_name}/image/upload/${public_id}`;

</script>

<!-- your code here -->
<img src="{src}" alt="{alt}"/>