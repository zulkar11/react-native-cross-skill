import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

interface CarouselProps {
  data: {image: string; link: string}[];
}

export const Slider: React.FC<CarouselProps> = ({data}) => {
  return (
    <Swiper showsPagination loop={true} autoplay autoplayTimeout={5}>
      {data?.map((item, index) => (
        <View key={index}>
          <Image
            source={{
              uri: `https://api.gcart.com.bd/api/v1/images/banner/${item.image}`,
            }}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
      ))}
    </Swiper>
  );
};
