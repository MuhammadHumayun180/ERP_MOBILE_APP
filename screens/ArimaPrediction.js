import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';

const ArimaPrediction = () => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  const handlePredictArima = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/predict-arima');

      if (response.status === 200) {
        setForecast(response.data.forecast);
        setError(null);
      } else {
        setError('Error fetching data');
      }
    } catch (error) {
      setError('Error connecting to server');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Predict ARIMA" onPress={handlePredictArima} />
      
      {forecast.length > 0 && (
        <View style={styles.chartContainer}>
          <Text style={styles.chartHeader}>ARIMA Forecast</Text>
          <LineChart
            data={{
              labels: Array.from({ length: forecast.length }, (_, i) => `${i + 1}`),
              datasets: [
                {
                  data: forecast,
                  color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue color
                },
              ],
            }}
            width={350} // Width of the chart
            height={200} // Height of the chart
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 2, // Number of decimal places in Y-axis values
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '4', // Radius of dots
                strokeWidth: '2',
                stroke: '#007aff',
              },
            }}
            bezier // Use smooth bezier curve
          />
        </View>
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  chartContainer: {
    marginTop: 20,
  },
  chartHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
  },
});

export default ArimaPrediction;
