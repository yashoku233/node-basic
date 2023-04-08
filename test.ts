
interface Options {
    foo?: string;
    bar?: string;
  }
  
  const options: Options | undefined = undefined;
  
  const fooValue = options && options.foo; // 判断 options 是否存在
  
  console.log(fooValue); // 输出 undefined，没有报错