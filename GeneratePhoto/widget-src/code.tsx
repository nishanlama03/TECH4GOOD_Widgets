const { widget } = figma;
const { Text, Input, useSyncedState} = widget;

async function downloadAndDisplayImage(keyword) {
  try {
    const ACCESS_KEY = '43opNvcq4dsjXkWqGBO4S71IT4vq9BN1YiEPf08Vm7I';
    let url = 'https://api.unsplash.com/photos/random?client_id=' + ACCESS_KEY;

    // If a keyword is provided, append it to the URL
    if (keyword) {
      url += '&query=' + encodeURIComponent(keyword);
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const json = await response.json();
    console.log('This image is: ', json.alt_description);
    console.log('Image Download Link:', json.urls.full);

    // Handle displaying the image in Figma here
    // Make sure to handle errors appropriately
  } catch (error) {
    console.error('Error fetching random photo:', error.message);
  }
}

function Widget() {
  // You can change the keyword here or fetch it dynamically from user input
  const keyword = 'cat'; // Example keyword

  return (
    <Text
      fontSize={24}
      onClick={() => downloadAndDisplayImage(keyword)}
    >
      Click for a random photo of {keyword} from Unsplash!
    </Text>
  );
}

// Register both Widget and Notepad components
widget.register(Widget);
