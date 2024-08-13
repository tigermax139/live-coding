// TODO implement wait function
/**
 *
 await wait(100); // execution wait 100ms
 nextCode(); // stated after 100ms
 * */
const wait = () => {};

const DEFAULT_IMAGE_URL = 'https://example-default.png';
const GET_IMAGE_TIMEOUT = 300;

const getImageUrl = async (id) => {
    const random = Math.random() * 1000;
    await wait(random);
    return `https://example-${id}.png`;
}

const imageIds = [1, 2, 3, 4, 5];

const processImages = () => {
    // TODO resolve image url for every item of imageIds array
    // TODO process images parallel
    // TODO if resolving process executes more that GET_IMAGE_TIMEOUT - return DEFAULT_IMAGE_URL instead
};
/**
 Example output:
 [
 'https://example-1.png',
 'https://example-2.png',
 'https://example-default.png',
 'https://example-default.png',
 'https://example-5.png',
 ]
 * */
