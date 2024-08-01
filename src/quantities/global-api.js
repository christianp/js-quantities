import { globalParse } from "./parse.js";
import {
  divSafe,
  mulSafe
} from "./utils.js";
import {
  getAliases,
  getUnits
} from "./definitions.js";
import { KINDS, getKinds } from "./kind.js";
import { swiftConverter } from "./conversion.js";
import QtyError from "./error.js";
import { SIGNATURE_VECTOR, SIGNATURE_POWER } from "./signature.js";

import Qty from "./constructor.js";

Qty.parse = globalParse;

Qty.getUnits = getUnits;
Qty.getAliases = getAliases;

Qty.mulSafe = mulSafe;
Qty.divSafe = divSafe;

Qty.KINDS = KINDS;
Qty.getKinds = getKinds;

Qty.swiftConverter = swiftConverter;

Qty.Error = QtyError;

Qty.SIGNATURE_VECTOR = SIGNATURE_VECTOR;
Qty.SIGNATURE_POWER = SIGNATURE_POWER;
