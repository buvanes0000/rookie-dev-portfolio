// LoadingAnimation.js
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/loading.json'; // Update the path to your JSON file

const Loading = () => {
  return (
    <div style={styles.container}>
      <Lottie animationData={animationData} loop={true} style={styles.animation} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height to center the animation
  },
  animation: {
    width: '450px',  // Adjust the width as needed
    height: '450px', // Adjust the height as needed
  },
};

export default Loading;
