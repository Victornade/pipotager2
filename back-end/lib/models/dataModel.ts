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
    pressure:{type: Number    },
    lumiere:{type: Number    }
});
