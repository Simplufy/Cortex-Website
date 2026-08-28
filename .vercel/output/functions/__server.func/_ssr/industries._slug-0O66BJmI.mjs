import { g as industryByPath } from "./site-BWEzcE1b.mjs";
import { H as notFound, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-DEkOF6vF.mjs";
import { r as IndustryPage } from "./inner-BLN76_Pm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries._slug-0O66BJmI.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { slug } = Route.useParams();
	const industry = industryByPath(slug);
	if (!industry) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustryPage, { industry });
}
//#endregion
export { Page as component };
