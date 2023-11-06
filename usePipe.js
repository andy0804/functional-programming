const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const g = n => n + 1;
const f = n => n * 2;
const doImperative = x => {
    const afterG = g(x);
    return f(afterG);
  };
  
  doImperative(20); // 42

const doDeclarative = pipe(g, f)
doDeclarative(20); // 42