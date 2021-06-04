import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: Dimensions.get('window').height,
    
      },
      
      titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center",
        justifyContent: 'center'
      },
    
      title: {
        fontSize: 40,
        fontWeight: "500",
        alignItems: "center",
        justifyContent: 'center'
      },
    
      subtitle: {
        fontSize: 16,
        color: "#000",
        fontWeight: 'bold',
        alignItems: "center",
        justifyContent: 'center'
    
      },

    
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
        opacity: 0.5,
      },

      buttonsContainer: {
          position: "absolute",
          bottom: 50,
          width: "100%"
      }
});

export default styles;