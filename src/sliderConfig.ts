// =========================================================================
// 🖼️ SLIDER IMAGES CONFIGURATION / НАСТРОЙКА ФОТО В СЛАЙДЕРЕ
// =========================================================================
// Чтобы поменять фото в сравнении, просто замените файлы по путям:
// 1. Фото БЕЗ шейдеров (слева):  src/assets/images/slider_without_shaders.jpg
// 2. Фото С шейдерами (справа):  src/assets/images/slider_with_shaders.jpg
// =========================================================================

import imageWithoutShaders from './assets/images/slider_without_shaders.jpg';
import imageWithShaders from './assets/images/slider_with_shaders.jpg';

export const sliderConfig = {
  // Изображения
  imageWithoutShaders,
  imageWithShaders,

  // Текстовые подписи на фото
  labelWithout: 'Without Shaders (Default)',
  labelWith: 'With Shaders (RoShade On)',
};
