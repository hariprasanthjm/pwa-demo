export class AddVehicle {
    registration_number: string;
    engine_number: string;
    engine_chasis_number: string;
    vehicle_model: string;
    vehicle_year: number;
    tonnage: number;
    fc_expiry_date: any;
    insurance_expiry_date: any;
    vehicle_docs: boolean;
}
export class AddVehicle1 {
   

    driver_name: string;
    licence_number: string;
    mobile_number: string;
}


export const expenseDatas: AddVehicle[] = [
    {
        registration_number: 'TN55K4563',
        engine_number: 'EFSV59656l',
        engine_chasis_number: 'FDFDKG54848',
        vehicle_model: 'Tata Prima 4928.S',
        vehicle_year: 2016,
        tonnage: 49,
        fc_expiry_date: '20-10-2018',
        insurance_expiry_date: '6-5-2018',
        vehicle_docs: true
    },
    {
        registration_number: 'TN32LB9966',
        engine_number: 'FSFSFV56152l',
        engine_chasis_number: 'FDFDKG54848',
        vehicle_model: 'Mahindra Blazo',
        vehicle_year: 2013,
        tonnage: 40,
        fc_expiry_date: '20-10-2017',
        insurance_expiry_date: '6-5-2017',
        vehicle_docs: true
    },
    {
        registration_number: 'TN32LB2066',
        engine_number: 'QEFSSV59656l',
        engine_chasis_number: 'STGDFDS6655',
        vehicle_model: 'Mahindra Blazo',
        vehicle_year: 2012,
        tonnage: 40,
        fc_expiry_date: '3-1-2018',
        insurance_expiry_date: '2-5-2018',
        vehicle_docs: true
    },
    {
        registration_number: 'TN45P6610',
        engine_number: 'DSSFSFE662',
        engine_chasis_number: 'DSDSDRT55',
        vehicle_model: 'Tata Prima 4928.S',
        vehicle_year: 2016,
        tonnage: 49,
        fc_expiry_date: '20-10-2018',
        insurance_expiry_date: '6-5-2018',
        vehicle_docs: true
    },
    {
        registration_number: 'TN09CC6694',
        engine_number: 'DGDTY5842',
        engine_chasis_number: 'FSF5SFSFF5S',
        vehicle_model: 'BharatBenz 3123R',
        vehicle_year: 2010,
        tonnage: 35,
        fc_expiry_date: '20-10-2018',
        insurance_expiry_date: '6-5-2018',
        vehicle_docs: true
    },
    {
        registration_number: 'TN55E4757',
        engine_number: 'EFSV59656l',
        engine_chasis_number: 'FDFDKG54848',
        vehicle_model: 'Eicher Pro 1114XP',
        vehicle_year: 2016,
        tonnage: 49,
        fc_expiry_date: '20-10-2018',
        insurance_expiry_date: '6-5-2018',
        vehicle_docs: true
    }
];

export const expenseDatas1: AddVehicle1[] = [
    {
       
        driver_name: 'ARUN',
        licence_number: '50,000',
        mobile_number: '45'
    },
    {
        
        driver_name: 'Prabu',
        licence_number: '45,000',
        mobile_number: '50'
    },
    {
        
        driver_name: 'Mani',
        licence_number: '20,000',
        mobile_number: '15'
    },
    {
        driver_name: 'KARTHI',
        licence_number: '80,000',
        mobile_number: '55'
    }
];


export const vehicleTypes = [
    {id: 1, name: 'Tata 407', size: '9.10 X 6.2 X 6.2', tonnage: 2.5},
    {id: 2, name: 'LCV / Canter', size: '17 X 7X 6.2', tonnage: 5},
    {id: 3, name: 'L.P.T.', size: '19 X 7 X 6.3', tonnage: 7},
    {id: 4, name: 'Truck', size: '18 X7 X 6.5', tonnage: 9},
    {id: 5, name: 'Open Truck', size: '18 X 7 X 8', tonnage: 9},
    {id: 6, name: 'Touras', size: '22 X 7X 7', tonnage: 15},
    {id: 7, name: 'High Bed Trailer', size: '40 X 8 X 7', tonnage: 20},
    {id: 8, name: 'Semi Low Bed Trailer', size: '40 X 8 X 8.6', tonnage: 20},
    {id: 9, name: 'Low Bed Trailer', size: '24 X 13 X 13', tonnage: 20},
    {id: 10, name: 'Double Excel', size: '40 X 8 X 7', tonnage: 22},
    {id: 11, name: 'Triple excel', size: '40 X 8 X 7', tonnage: 27}
];

export const vehicleGoodsTypes = [
    'Auto Parts',
    'Bardana jute or plastic',
    'Building Materials',
    'Cement',
    'Chemicals',
    'Coal And Ash',
    'Container',
    'Cotton seed',
    'Electronics Consumer Durables',
    'Fertilizers',
    'Fruits And Vegetables',
    'Furniture And Wood Products',
    'House Hold Goods',
    'Industrial Equipments',
    'Iron sheets or bars or scraps',
    'Liquids in drums',
    'Liquids/Oil',
    'Machinery new or old',
    'Medicals',
    'Metals',
    'Mill Jute Oil',
    'Others',
    'Packed Food',
    'Plastic Pipes or other products',
    'powder bags',
    'Printed books or Paper rolls',
    'Refrigerated Goods',
    'Rice or wheet or Agriculture Products',
    'Scrap',
    'Spices',
    'Textiles',
    'Tyres And Rubber Products',
    'Vehicles or car'
  ]
