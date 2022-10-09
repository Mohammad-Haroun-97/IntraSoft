const rootReducers={
     bbbb:{

    },
    ccc:{

    },
    
    aaa:{

    },
    
    fff:{

    }

}



const sortObject = (o) =>

  Object.keys(o)

    .sort()

    .reduce((r, k) => {

      r[k] = o[k];
// =k
      return r;

    },{}
    
    );

    console.log("    sortObject(rootReducers)",    sortObject(rootReducers));