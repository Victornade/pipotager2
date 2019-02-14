import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DataSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    temperature:{type: Number    },
    humidite_air:{type: Number    },
    humidite_1:{type: Number    },
    humidite_2:{type: Number    },
    humidite_3:{type: Number    },
    humidite_4:{type: Number    },
    humidite_5:{type: Number    },
    humidite_6:{type: Number    },
    air:{type: Number    },
    pression:{type: Number    },
    lux:{type: Number    },
    pm25 :{type: Number    },
    pm10:{type: Number    },
    pm100:{type: Number    },
    apm25:{type: Number    },
    apm10:{type: Number    },
    apm100:{type: Number    },
    gt03um:{type: Number    },
    gt05um:{type: Number    },
    gt10um:{type: Number    },
    gt25um:{type: Number    },
    gt50um:{type: Number    }
});
