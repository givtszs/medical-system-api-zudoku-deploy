import{O as i,j as n}from"./entry.client-DfLRbahJ.js";const l="Please follow the installation procedure and then run the following:",s=[{depth:2,value:"Getting Started",id:"getting-started"}],r={title:"Authorization"};function o(t){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"getting-started",children:"Getting Started"}),`
`,n.jsxs(e.p,{children:["Please follow the ",n.jsx(e.a,{href:"..%5Cdocs%5Cinstallation",children:"installation procedure"})," and then run the following:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-php",children:`<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\\Client\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\\Client\\Api\\AppointmentsApi(
    // If you want use custom http client, pass your client which implements \`GuzzleHttp\\ClientInterface\`.
    // This is optional, \`GuzzleHttp\\Client\` will be used as default.
    new GuzzleHttp\\Client(),
    $config
);
$appointment_id = 56; // int | ID of the appointment to cancel
$reason = 'reason_example'; // string | Reason for cancellation

try {
    $apiInstance->cancelAppointment($appointment_id, $reason);
} catch (Exception $e) {
    echo 'Exception when calling AppointmentsApi->cancelAppointment: ', $e->getMessage(), PHP_EOL;
}

`})})]})}function c(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{c as default,l as excerpt,r as frontmatter,s as tableOfContents};
//# sourceMappingURL=authorization-BbOzSohO.js.map
