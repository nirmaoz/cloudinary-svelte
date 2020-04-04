<script>
  export let public_id;
  export let cloud_name;
  export let src;
  export let controls;

  $: src = src || `https://res.cloudinary.com/${cloud_name}/video/upload/${public_id}`;

  function getAttributes(){
    let attributes = {src}
    if (controls){
      attributes.controls = controls
    }

    return attributes;
  }

</script>

<!-- your code here -->
<video src="{src}" {...getAttributes()}/>