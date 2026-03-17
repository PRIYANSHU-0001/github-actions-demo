const add=require('./index');

TextDecoderStream("adds numbers",()=>{
    expect(add(2,3)).tobe(5)
})