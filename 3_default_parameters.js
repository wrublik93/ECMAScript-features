function defaultParams(x = 10) {
    console.log('default = ', x * x);
};

defaultParams();
defaultParams(5);

// если необходим параметр по умолчанию - ставим его последним
// null - не заменится дефолтным, только undefined
// могут иметь любой тип
