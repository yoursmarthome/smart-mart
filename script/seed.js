const db = require('../server/db')
const { User, Category, Product, Review } = require('../server/db/models')

const categories = [
  {
    name: 'Home Assistants',
    description: 'To control your home.',
    photo: '',
    products: [
      {
        name: 'Google - Home - White/Slate fabric',
        description: 'Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest.',
        photo: '../assets/images/products/Google_Home_3.jpg',
        rating: 3,
        price: 128.99
      },
      {
        name: 'Google - Home Mini - Chalk',
        description: 'Get hands-free help in any room. Google Home Mini is powered by the Google Assistant, so you can ask it questions and tell it to do things. Just start with "Ok Google" to get answers from Google, tackle your day, enjoy your entertainment, and control your smart home. And when you ask for help, it can tell your voice from others for a more personalized experience. Google Home Mini works on its own or you can have a few around the house, giving you the power of Google anywhere.',
        photo: '../assets/images/products/Google_Home_Mini_1.jpg',
        rating: 5,
        price: 48.99
      },
      {
        name: 'Google - Home Mini - Charcoal',
        description: 'Get hands-free help in any room. Google Home Mini is powered by the Google Assistant, so you can ask it questions and tell it to do things. Just start with "Ok Google" to get answers from Google, tackle your day, enjoy your entertainment, and control your smart home. And when you ask for help, it can tell your voice from others for a more personalized experience. Google Home Mini works on its own or you can have a few around the house, giving you the power of Google anywhere.',
        photo: '../assets/images/products/Google_Home_Mini_ch1.jpg',
        rating: 4,
        price: 48.99
      },
      {
        name: 'Google - Home & Google Home Mini in Chalk Package',
        description: 'Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest.',
        photo: '../assets/images/products/Google_Home_Package.jpg',
        rating: 2,
        price: 157.99
      },
      {
        name: 'Amazon - Echo (2nd generation) - Charcoal Fabric',
        description: "What is Echo Amazon Echo is a hands-free speaker you control with your voice. Echo connects to the Alexa Voice Service to play music, ask questions, make calls, send and receive messages, provide information, news, sports scores, weather, and more-instantly. All you have to do is ask. Echo is also an expertly tuned speaker that can fill any room with immersive sound. It has seven microphones and beamforming technology so it can hear you from across the room-even while music is playing. When you want to use Echo, just say the wake word 'Alexa' and Echo responds instantly.",
        photo: '../assets/images/products/Amazon_Echo_ch1.jpg',
        rating: 5,
        price: 119.99
      },
      {
        name: 'Amazon - Echo (2nd generation) - Walnut Finish',
        description: "What is Echo Amazon Echo is a hands-free speaker you control with your voice. Echo connects to the Alexa Voice Service to play music, ask questions, make calls, send and receive messages, provide information, news, sports scores, weather, and more-instantly. All you have to do is ask. Echo is also an expertly tuned speaker that can fill any room with immersive sound. It has seven microphones and beamforming technology so it can hear you from across the room-even while music is playing. When you want to use Echo, just say the wake word 'Alexa' and Echo responds instantly.",
        photo: '../assets/images/products/Amazon_Echo_wa1.jpg',
        rating: 5,
        price: 119.99
      },
      {
        name: 'Amazon - Echo Dot (2nd Generation) - Black',
        description: 'Deliver your favorite playlist anywhere in your home with the Amazon Echo Dot voice-controlled device. Control most electric devices through voice activation, or schedule a ride with Uber and order a pizza. The Amazon Echo Dot voice-controlled device turns any home into a smart home with the Alexa app on a smartphone or tablet.',
        photo: '../assets/images/products/Amazon_Echo_Dot1.jpg',
        rating: 4,
        price: 49.99
      },
      {
        name: 'Amazon - Echo Dot (2nd Generation) - White',
        description: 'Deliver your favorite playlist anywhere in your home with the Amazon Echo Dot voice-controlled device. Control most electric devices through voice activation, or schedule a ride with Uber and order a pizza. The Amazon Echo Dot voice-controlled device turns any home into a smart home with the Alexa app on a smartphone or tablet.',
        photo: '../assets/images/products/Amazon_Echo_Dot1.jpg',
        rating: 4,
        price: 49.99
      },
      {
        name: 'Harman/kardon - Invoke Smart Bluetooth Speaker with Cortana Voice Assistant - Graphite',
        description: "Answer Skype audio calls hands-free with this voice-activated Harman Kardon Invoke speaker. It's made with premium materials to project music powerfully without sacrificing sound quality from a 360-degree metal cabinet. This Harman Kardon Invoke speaker includes Microsoft virtual assistant Cortana to answer questions and smart home technology to streamline tasks.",
        photo: '../assets/images/products/Harman_Invoke_Cortana1.jpg',
        rating: 5,
        price: 199.99
      },
    ]
  },
  {
    name: 'Lighting',
    description: 'To light your house.',
    photo: '',
    products: [
      {
        name: 'Philips - Hue Bloom Dimmable LED Smart Table Lamp - White',
        description: 'Create indirect ambient lighting in any room with this Philips Hue Bloom lamp. It lets you choose from 16 million colors to create fun effects, and you can sync its operation with movies or music using a compatible app. Use your smartphone or tablet to control light levels and set timers on this Philips Hue Bloom lamp.',
        photo: '../assets/images/products/Philips_Hue_Bloom_Table_Lamp2.jpg',
        rating: 3,
        price: 59.99
      },
      {
        name: 'Philips - Hue Lightstrip Plus Dimmable LED Smart Light - Multicolor',
        description: 'Add a creative glow to any corner of your space with this 6.6-foot Philips Hue LED light strip. Its multicolored, dimmable lights suit any desired ambience, and it lets you sync its movement with music or movies via third-party apps. Bend, shape and cut this Philips Hue LED light strip for flexible customization.',
        photo: '../assets/images/products/Phillips_Hue_Lightstrip1.jpg',
        rating: 2,
        price: 85.99
      },
      {
        name: 'Philips - Hue White A19 Smart LED Bulb - White Only',
        description: 'Provide smart illumination for your space with this Philips Hue white light bulb. The equivalent to a 60W standard bulb, this advanced bulb can be used as a regular LED light or to enhance your enjoyment with the Philips Hue app. This Philips Hue white light bulb is compatible with Alexa, Apple HomeKit and Google Assistant.',
        photo: '../assets/images/products/Philips_White_Light_Bulb1.jpg',
        rating: 5,
        price: 14.99
      },
      {
        name: 'Philips - Hue White and Color Ambiance A19 Wi-Fi Smart LED Bulb - Multicolor',
        description: 'Set a beautiful mood with this Philips hue white and color ambiance bulb that works with your existing hue system. The soft flattering colors set a tone, and you can sync your lights depending on your activities through the corresponding app. This Philips hue white and color ambiance bulb offers 16 million choices in both warm and cool for versatility.',
        photo: '../assets/images/products/Philips_White_Color_Bulb3.jpg',
        rating: 1,
        price: 49.99
      },
      {
        name: 'Philips - Hue White Ambiance E12 Wi-Fi Smart LED Decorative Candle Bulb - White',
        description: 'Produce a welcoming ambience in your room with this Philips Hue candle bulb. It lets you wake up naturally by gradually increasing the light when you need it, and it allows you to go to sleep by slowly dimming the candle. Integrate this Philips Hue candle bulb with your smartphone for even more options.',
        photo: '../assets/images/products/Philips_Decorative_Light_Bulb1.jpg',
        rating: 3,
        price: 29.99
      },
      {
        name: 'Nanoleaf - Aurora Rhythm Smarter Kit',
        description: 'Interpret music visually with this Nanoleaf Aurora Rhythm starter kit. Its nine LED panels can make almost any shape imaginable, and the included upgrade module transforms music into color-changing light shows. This Nanoleaf Aurora Rhythm starter kit works with the Nanoleaf Aurora app, so you can customize the display via a mobile device.',
        photo: '../assets/images/products/Nanoleaf_Aurora_Starter1.jpg',
        rating: 4,
        price: 229.99
      },
      {
        name: 'Philips - Hue Bridge 2nd Generation - White',
        description: 'Get the level of control you need with this hue bridge, which features internal storage space for enhanced functionality. You can easily control your lighting with HomeKit for your iOS 9-powered Apple® iPhone®. Plus, connect your existing Zigbee and Wink home automation products.',
        photo: '../assets/images/products/Philips_Hue_Bridge1.jpg',
        rating: 5,
        price: 52.99
      },
      {
        name: 'Philips - hue Tap Remote Switch - White',
        description: 'Take your smart lighting controls to the next level by accessing up to four light scenes with the push of a button. Great as a backup when your smartphone is charging or in use, the hue tap provides wireless, touch-powered control from room to room',
        photo: '../assets/images/products/Philips_Tap1.jpg',
        rating: 3,
        price: 52.99
      },
      {
        name: 'Lutron - Caseta Wireless Smart Lighting Dimmer Switch Starter Kit - White',
        description: 'Light up your home before you arrive with this Caseta wireless dimmer kit. The complete setup includes the Smart Bridge and app, so you can connect with HomeKit technology from the moment you install. Wallplates and Pico remotes with this Caseta wireless dimmer kit complete the collection for smart-enabled wall and ceiling lighting.',
        photo: '../assets/images/products/Lutron_Dimmer_Kit1.jpg',
        rating: 4,
        price: 99.99
      }
    ]
  },
  {
    name: 'Home Theater',
    description: 'To light your house.',
    photo: '',
    products: [
      {
        name: 'Google - Home Max - Chalk',
        description: "Hear every note as the artist intended. Feel every beat with heart-pounding bass. Meet Google Home Max. It's Google's ultimate speaker, made for your music. You get deep layers of balanced bass along with crystal-clear highs. No unwanted resonance. No muddiness. Just pure sound that fills the room. Room EQ adjusts the sound based on where you place it. Media EQ fine tunes the speaker so every song sounds its best. It's software that keeps getting smarter thanks to automatic updates.",
        photo:'../assets/images/products/Google_Home_Max_1.jpg',
        rating: 5,
        price: 399.99
      },
      {
        name: 'Google - Home Max - Charcoal',
        description: "Hear every note as the artist intended. Feel every beat with heart-pounding bass. Meet Google Home Max. It's Google's ultimate speaker, made for your music. You get deep layers of balanced bass along with crystal-clear highs. No unwanted resonance. No muddiness. Just pure sound that fills the room. Room EQ adjusts the sound based on where you place it. Media EQ fine tunes the speaker so every song sounds its best. It's software that keeps getting smarter thanks to automatic updates.",
        photo:'../assets/images/products/Google_Home_Max_Ch1.jpg',
        rating: 5,
        price: 399.99
      }
    ]
  },
  {
    name: 'Temperature Control',
    description: 'To control your temperature.',
    photo: '',
    products: [
      {
        name: 'Nest - Learning Thermostat - 3rd Generation - Black',
        description: "Save money with this Nest Third Generation Learning thermostat. The corresponding app lets you track energy usage and get tips on energy conservation, so you save an average of 10-15 percent on your heating and cooling bills. This Nest Third Generation Learning thermostat programs itself to adjust the temperature according to your schedule.",
        photo:'../assets/images/products/Nest_thermo_black1.jpg',
        rating: 5,
        price: 247.99
      },
      {
        name: 'Nest - Learning Thermostat - 3rd Generation - Stainless Steel',
        description: "Nest 3rd Generation Programmable Wi-Fi Learning Thermostat: Take control of your home's heating and cooling without lifting a finger with this thermostat, which learns your habits and adjusts to automatically regulate your home's temperature based on your schedule. The Nest Leaf feature alerts you when you choose a temperature that's energy efficient.",
        photo:'../assets/images/products/Nest_Thermo_Silver1.jpg',
        rating: 5,
        price: 249.99
      },
      {
        name: 'Nest - Thermostat E - white',
        description: "Its simple design and new frosted display blend into the background. With proven energy-saving features, the Nest Thermostat E can help you save from day one. And you can change the temperature from anywhere – the beach, the office or your bed.",
        photo:'../assets/images/products/Nest_White_1.jpg',
        rating: 4,
        price: 169.99
      },
      {
        name: 'Ecobee - ecobee3 lite Smart Thermostat - Black',
        description: "Ensure uncompromised comfort with this ecobee3 lite smart thermostat. Its DataRhythm technology provides intuitive temperature adjustment based on the current weather, family schedules, desired settings and information from room sensors for efficient operation. Control this Wi-Fi-enabled ecobee3 lite smart thermostat by voice or remotely from your Android or iOS device or Apple Watch.",
        photo:'../assets/images/products/Ecobee3_lite1.jpg',
        rating: 4,
        price: 169.99
      },
      {
        name: 'ecobee - ecobee4 Wi-Fi Thermostat with Room Sensor and Built-In Alexa Voice Service - Black',
        description: "With built-in Alexa Voice Service, ecobee4 can listen to your voice commands and respond. Have it set a timer, read you the news, adjust the temperature, and more. It also comes with a room sensor that helps manage hot and cold spots in your home, delivering comfort in the rooms that matter. And because they can detect occupancy, they can automatically enable the right mode on your ecobee4 for energy savings when it senses no one is home.",
        photo:'../assets/images/products/Ecobee4_thermo1.jpg',
        rating: 5,
        price: 249.99
      },
      {
        name: 'ecobee - ecobee Remote Sensors (2-Pack) - White',
        description: "The right temperature in the right places. These wireless room sensors work with ecobee4, ecobee3 Lite, and ecobee3 Wi-Fi smart thermostats.",
        photo:'../assets/images/products/ecobees_sensors1.jpg',
        rating: 3,
        price: 66.99
      }
    ]
  },
  {
    name: 'Security Cameras',
    description: 'To light your house.',
    photo: '',
    products: [
      {
        name: 'Blink Home Security Camera System - 2 Camera Kit - White',
        description: "With the Blink XT, you can now protect your entire home, inside and out, with the same video-first security that you have come to love. Blink is easy to set up, just a fraction of the cost of other home monitoring systems and has no subscription fees or data storage charges.",
        photo:'../assets/images/products/Blink_White_1.jpg',
        rating: 4,
        price: 169.99
      },
      {
        name: 'Blink XT Outdoor/Indoor Home Security Camera System for Your Smartphone - 3 Camera Kit - Black',
        description: "Protect Your Entire Home, Inside & Out, With Blink XT Weatherproof Cameras. The Most Affordable, Battery Powered Outdoor Security Camera Available! A truly wire-free video home security camera & monitoring system with batteries that last for 2 year",
        photo:'../assets/images/products/Blink_Black_1.jpg',
        rating: 5,
        price: 319.99
      },
      {
        name: 'Camera Bulb VR Panoramic Bulb Camera with 360 Degree Fisheye Lens Wireless Wifi Camera Home Security System Camera Android IOS APP White',
        description: "WIRELESS WIFI CONNECTIVITY:Fast and easy App setup, you will get guidance in every step from our 360 Eyes app.Remote access to the camera bulb on Smartphone via your mobile 4G network or WiFi. Allow users to access the wireless wifi lens camera using mobile phone.",
        photo:'../assets/images/products/Camera_blub1.jpg',
        rating: 3,
        price: 49.99
      },
      {
        name: 'Nest - Hello Smart Wi-Fi Video Doorbell',
        description: "Interact with visitors at your door by using this Nest Hello video doorbell. Its built-in HD camera with night vision lets you see people from your smartphone, and its HD Talk and Listen feature suppresses background noise for clearer communication. Review the recorded recent activity outside your home via the three-hour snapshot history of this Nest Hello video doorbell.",
        photo:'../assets/images/products/nest_doorbell_1.jpg',
        rating: 5,
        price: 229.99
      },
      {
        name: 'Nest - Nest Cam IQ Indoor Security Camera - White',
        description: "Meet the Nest Cam IQ security camera. Nest Cam IQ works indoors, with crisp HD video and advanced algorithms that can identify when someone's in your home, alert you and zoom in on their face. Use the Nest app to control the camera, watch live, and view a detailed snapshot history of events.",
        photo:'../assets/images/products/Nest_indoor_cam1.jpg',
        rating: 4,
        price: 299.99
      },
      {
        name: 'Nest - Cam IQ Outdoor Security Camera - White',
        description: "Nest Cam IQ is a seriously sharp outdoor security camera. It has brains to tell you when it sees a person and Supersight to show you an extra clear close-up tracking shot of who’s there. It can even recognize familiar faces with Nest Aware.",
        photo:'../assets/images/products/nest_outdoor_cam1.jpg',
        rating: 4,
        price: 349.99
      },
    ]
  }

];

async function seed () {
  await db.sync({force: true})

  Promise.all(categories.map(category => {
    Category.create(category, { include: Product })
  }))
}

seed()
  .catch(err => {
    console.error('Error seeding db. Error:', err)
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('Successfully seeded db!')
    console.log('closing db connection')
    console.log('db connection closed')
    //db.close()
  })

console.log('seeding...')
