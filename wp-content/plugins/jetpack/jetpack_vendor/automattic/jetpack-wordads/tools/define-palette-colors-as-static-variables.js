const webpack=require('webpack');function definePaletteColorsAsStaticVariables(){return new webpack.DefinePlugin({PALETTE:(()=>{const colors=require('@automattic/color-studio').colors;const stringifiedColors={};for(const color in colors){stringifiedColors[color]=`"${ colors[color]}"`;}
return stringifiedColors;})(),});}
module.exports=definePaletteColorsAsStaticVariables;