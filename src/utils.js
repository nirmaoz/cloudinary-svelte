import {Cloudinary} from "../node_modules/cloudinary-core/cloudinary-core.js";

/**
 * Return object without null/undefined entries
 * @param {*} obj 
 */
const nonEmpty = (obj) => Object.entries(obj).reduce((a, [k, v]) => (v == null ? a : { ...a, [k]: v }), {})

const getTag = (props, tagType) => {
  const { public_id, ...ops } = nonEmpty(props); // Remove null/undefined props
  const cld = Cloudinary.new(ops); // Initialize cloudinary with new props

  return cld[`${tagType}Tag`](props.public_id, ops);
};

/**
 * Get a new <img> tag initialized with given props
 * @param {*} props
 */
const getImageTag = (props) => getTag(props, "image");

/**
 * Get a new <video> tag initialized with given props
 * @param {*} props
 */
const getVideoTag = (props) => getTag(props, "video");

export {
  nonEmpty,
  getImageTag,
  getVideoTag
};
