import Qty from "./constructor.js";
import { uniq } from "./utils.js";
import { unitSignatureFromDict } from "./signature.js";

var KINDS_DICT = [
  [
    {  },
    "unitless"
  ],
  [
    { "length": 1 },
    "length"
  ],
  [
    { "length": 2 },
    "area"
  ],
  [
    { "length": 3 },
    "volume"
  ],
  [
    { "time": 1 },
    "time"
  ],
  [
    { "temperature": 1 },
    "temperature"
  ],
  [
    { "length": 1, "time": -3, "mass": 1 },
    "yank"
  ],
  [
    { "length": 2, "time": -3, "mass": 1 },
    "power"
  ],
  [
    { "length": -1, "time": -2, "mass": 1 },
    "pressure"
  ],
  [
    { "length": 1, "time": -2, "mass": 1 },
    "force"
  ],
  [
    { "length": 2, "time": -2, "mass": 1 },
    "energy"
  ],
  [
    { "length": -1, "time": -1, "mass": 1 },
    "viscosity"
  ],
  [
    { "length": 1, "time": -1, "mass": 1 },
    "momentum"
  ],
  [
    { "length": 2, "time": -1, "mass": 1 },
    "angular_momentum"
  ],
  [
    { "length": -3, "mass": 1 },
    "density"
  ],
  [
    { "length": -2, "mass": 1 },
    "area_density"
  ],
  [
    { "mass": 1 },
    "mass"
  ],
  [
    { "time": 1, "mass": -1, "current": 1 },
    "radiation_exposure"
  ],
  [
    { "length": -1, "current": 1 },
    "magnetism"
  ],
  [
    { "current": 1 },
    "current"
  ],
  [
    { "time": 1, "current": 1 },
    "charge"
  ],
  [
    { "length": -2, "time": 3, "mass": -1, "current": 2 },
    "conductance"
  ],
  [
    { "length": -2, "time": 4, "mass": -1, "current": 2 },
    "capacitance"
  ],
  [
    { "time": -1, "substance": 1 },
    "activity"
  ],
  [
    { "length": -3, "substance": 1 },
    "molar_concentration"
  ],
  [
    { "substance": 1 },
    "substance"
  ],
  [
    { "length": -2, "luminosity": 1 },
    "illuminance"
  ],
  [
    { "luminosity": 1 },
    "luminous_power"
  ],
  [
    { "currency": 1 },
    "currency"
  ],
  [
    { "length": 2, "time": -4, "mass": 1, "current": -2 },
    "elastance"
  ],
  [
    { "length": 2, "time": -3, "mass": 1, "current": -2 },
    "resistance"
  ],
  [
    { "length": 2, "time": -2, "mass": 1, "current": -2 },
    "inductance"
  ],
  [
    { "length": 2, "time": -3, "mass": 1, "current": -1 },
    "potential"
  ],
  [
    { "time": -2, "mass": 1, "current": -1 },
    "magnetism"
  ],
  [
    { "length": 2, "time": -2, "mass": 1, "current": -1 },
    "magnetism"
  ],
  [
    { "length": 3, "mass": -1 },
    "specific_volume"
  ],
  [
    { "length": 1, "time": -4 },
    "snap"
  ],
  [
    { "length": 1, "time": -3 },
    "jolt"
  ],
  [
    { "length": 1, "time": -2 },
    "acceleration"
  ],
  [
    { "length": 2, "time": -2 },
    "radiation"
  ],
  [
    { "time": -1 },
    "frequency"
  ],
  [
    { "length": 1, "time": -1 },
    "speed"
  ],
  [
    { "length": 2, "time": -1 },
    "viscosity"
  ],
  [
    { "length": 3, "time": -1 },
    "volumetric_flow"
  ],
  [
    { "length": -1 },
    "wavenumber"
  ],
  [
    { "time": -1, "information": 1 },
    "information_rate"
  ],
  [
    { "information": 1 },
    "information"
  ],
  [
    { "time": -1, "angle": 1 },
    "angular_velocity"
  ],
  [
    { "angle": 1 },
    "angle"
  ]
];

export var KINDS = Object.fromEntries(KINDS_DICT.map(([dimensions, name]) => [ unitSignatureFromDict(dimensions), name ]));

/**
 * Returns the list of available well-known kinds of units, e.g.
 * "radiation" or "length".
 *
 * @returns {string[]} names of kinds of units
 */
export function getKinds() {
  return uniq(Object.keys(KINDS).map(function(knownSignature) {
    return KINDS[knownSignature];
  }));
}

Qty.prototype.kind = function() {
  return KINDS[this.signature.toString()];
};
