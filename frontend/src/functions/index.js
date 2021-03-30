import path from 'path';

const pathFiles = '..' + __dirname+ '..'+ __dirname+ '..'+ __dirname+ 'assets'+ __dirname+ 'imagens_clb' + __dirname;

export const splitWord = (word: string) => {
  let ext = '', name = '';
  ext = word.split('.')[1];
  name = word.substring(0, 7);
  if ( ext == word.match('jpg', 'png', 'jpeg') ){
    return name.concat('...', ext);
  }else{
    return name.concat('... '); 
  }
}

export const splitWordFull = (word: string) => {
  let primary_name = word.split("_")[0];
  primary_name = primary_name.split(" ")[0].concat(" ", primary_name.split(" ")[1]);
  return primary_name;
}

export const splitWordEnd = (word: string) => {
  let secondary_name = word.split("_")[1];

  return secondary_name;
}

export const concatPathImagem = (word: string) => {
  word = word.replaceAll(' ', '%20');

  var pathF = 'https://raw.githubusercontent.com/L3onT3chh/ImagensClb/master/' + word + '.jpg';
  console.log(word);
  return pathF;

}