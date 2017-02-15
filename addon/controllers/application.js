import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

const { computed, inject } = Ember;

export default FreestyleController.extend({
  emberFreestyle: inject.service(),
  showCode: computed.alias('emberFreestyle.showCode'),

  colorPalette: {
    primary: {
      name: 'Kelly Green',
      base: '#428627',
      variable: '$primary-color'
    },
    accent: {
      name: 'Moss Green',
      base: '#D7EDCE',
      variable: '$green-color'
    },
    secondary: {
      name: 'Peach',
      base: '#E4AB67',
      variable: '$orange-color'
    },
    foreground: {
      name: 'Spindle',
      base: '#CEE0ED',
      variable: '$blue-color'
    },
    background: {
      name: 'Yellow 500',
      base: '#FFEB3B',
      variable: 'none'
    },
    backgrounddd: {
      name: 'Ryan Teal',
      base: '#1CCDC7',
      variable: '$ryans-color'
    }
  },

  grayPalette: {
    white: {
      name: 'White',
      base: '#FFFFFF',
      variable: '$white'
    },
    gray50: {
      name: 'Gray 50',
      base: '#FAFAFA',
      variable: '$gray50'

    },
    gray300: {
      name: 'Gray 300',
      base: '#E0E0E0',
      variable: '$gray300'
    },
    gray600: {
      name: 'Gray 600',
      base: '#757575',
      variable: '$gray600'
    },
    gray800: {
      name: 'Gray 800',
      base: '#424242',
      variable: '$gray800'
    },
    gray900: {
      name: 'Black 900',
      base: '#212121',
      variable: '$black'
    }
  },

  showRental: computed(function(){
    return rental;
  })

});


let rental = {
  id: 2333,
  position:0,
  name: "2017 Winnebago Minnie Winnie 22R",
  type: "c",
  deleted: false,
  description: "24 Feet Brand New 2017 Winnebago Minnie Winnie. \n- Easy to drive and park. \n- Super clean with all the amenities of home.\n- Clean towels and beddings are provided with no additional cost.\n- Rate:  $200/night with 2 day minimum.\n- Mileage:  100 mile/night and $0.35/mile for extra.\n- Generator:  4 hours/night and $5/hour for extra.\n- Propane:  free.\n- Pet friendly. \n- Valid driver license is required and driver should be older than 25.\n- Towing or travel abroad is NOT allowed.\n- NO SMOKING! \n- Tax rate is %8.5\n- RV is required to be returned before 4PM on the return day.",
  summary: null,
  seatbelts: null,
  sleeps: 6,
  sleepsAdults: null,
  sleepsKids: null,
  priceDay: 18000,
  priceWeek: 116000,
  activePriceDay: 18000,
  activePriceWeek: 116000,
  coachnetReady: true,
  coachnetRequired: false,
  roadsideMissing: [],
  useDayPricing: false,
  depositPercentage: null,
  dealer: false,
  groupOnMap: false,
  securityDeposit: 150000,
  location: {
    city: "Santa Clara",
    lat: 37.395,
    lng: -121.949,
    state: "CA"
  },
  ownerIdentifier: 22045,
  published: true,
  favorite: false,
  availability_set: true,
  insuranceState: "approved",
  insurancePlan: 8,
  insuranceEligible: true,
  eligibleForPlans: [],
  minimumDays: 2,
  score: 5,
  scoreCount: 1,
  cancelPolicy: "moderate",
  favoriteCount: 9,
  instantBook: false,
  vehicleMake: "Winnebago",
  vehicleModel: "Minnie Winnie",
  vehicleClass: null,
  vehicleYear: 2017,
  vehicleLength: 24,
  vehicleVin: null,
  vehicleDryWeight: null,
  vehicleAmps: null,
  vehicleGvwr: null,
  vehicleLicensePlate: null,
  vehicleLicensePlateState: null,
  vehicleReplacementValue: null,
  vehicleHeight: null,
  vehicleLengthWithHitch: null,
  vehicleWidth: null,
  vehicleBoxLength: null,
  vehicleCurrentMileage: null,
  vehicleCurrentGenerator: null,
  importId: null,
  internalId: null,
  diningTable: true,
  generator: true,
  airConditioner: true,
  heater: true,
  microwave: true,
  stove: true,
  oven: true,
  refrigerator: true,
  kitchenSink: true,
  insideShower: true,
  outsideShower: false,
  toilet: true,
  tvDvd: true,
  cdPlayer: false,
  radio: true,
  audioInputs: true,
  wifi: false,
  satellite: true,
  skylight: false,
  ceilingFan: false,
  awning: true,
  washerDryer: false,
  extraStorage: true,
  levelingJacks: false,
  backupCamera: true,
  bikeRack: false,
  towHitch: false,
  inverter: false,
  solar: false,
  slideOuts: null,
  smokingAllowed: false,
  oneWayRentals: false,
  petFriendly: true,
  burningManFriendly: false,
  tailgateFriendly: false,
  handicapAccessible: false,
  waterTank: 40,
  fuelTank: 55,
  propaneTank: 18,
  sewageTank: 21,
  grayTank: 24,
  trailerWeight: null,
  hitchWeight: null,
  transmission: "automatic",
  mpg: 10,
  minimumAge: null,
  fuelType: "gas",
  bedsQueen: null,
  bedsKing: null,
  bedsTwin: null,
  consignedPayPct: null,
  consignedPayPctMileage: null,
  consignedPayPctGenerator: null,
  consignedPayPctCcFee: null,
  consignedPayPctInsuranceFee: null,
  currentLocation: null,
  primaryImage: "51440",
  taxRate: "483",
  owner: "22045",
  lineItems: [null,null],
  generatorUsageItem: null,
  mileageUsageItem: null,
  rentalPriceUsageItem: null,
  vehicleOwner: null
};
