import PlaceholderImage from "./../Assets/person-placeholder-image.jpeg"
// ;`data:image/jpeg;base64,${image}`
const getValidImage = (image: string | null): string =>
	image ? { uri: image, cache: "reload" } : PlaceholderImage

export default getValidImage
