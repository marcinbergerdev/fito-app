export default {
 calculateYourBmi(context, bmi){
  context.commit('calculateYourBmi', bmi.data)
 },
 showRange(context){
  context.commit('showRange')
 }
}