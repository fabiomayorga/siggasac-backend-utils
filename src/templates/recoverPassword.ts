import { getStyle, getLogoEkosave, getFooter } from './styles/stylesTemplates';

export function recoveryPasswordTemplate(password: string, company: string) {
    const EMAIL_TEMPLATE = `<div>
   <style type="text/css">
       @import url(http://fonts.googleapis.com/css?family=Roboto);

       .contentInner{
           width: 748px;
           max-width: 748px;
       }

       #logoFooter{
           display:table-cell;
       }

       #header {
           max-width: 748px;
       }

       .infotable {
           max-width: 631px;
           overflow-x: scroll;
       }

       .infotable table {
           border: 1px solid #ccc;
           width: 100%;
           margin: 0;
           padding: 0;
           border-collapse: collapse;
           border-spacing: 0;
       }

       .infotable table tr {
           border: 1px solid #ddd;
           padding: 5px;
       }


       .infotable table td {
           padding: 10px;
           text-align: center;
           font-size: 14px !important;
           color: #66666b !important;
           border-bottom: 1px dotted #ccc;
       }

       .infotable table th {
           font-size: 10px;
           letter-spacing: 1px;
       }

       @media screen and (max-width: 600px) {

        #logoFooter{
            display:none;
        }

           .contentInner {
               width: auto !important;
           }

           .infotable table {
               border: 0;
           }

           .infotable table thead {
               display: none;
           }

           .infotable table tr {
               margin-bottom: 10px;
               display: block;
               border-bottom: 2px solid #ddd;
           }

           .infotable table td {
               display: block;
               text-align: right;
               font-size: 13px;
               border-bottom: 1px dotted #ccc;
           }

           .infotable table td:last-child {
               border-bottom: 0;
           }

           .infotable table td:before {
               content: attr(data-label);
               float: left;
               text-transform: uppercase;
               font-weight: bold;
           }
       }

       .infotable table td,
       td {
           font-family: Roboto;
       }

       .rps_b527 .x_STYLE1 {
           font-family: Arial;
           font-size: 13px;
           color: #666666
       }

       .rps_b527 .x_STYLE2 {
           font-size: 13px
       }
   </style>
   <div class="rps_b527" style="background-color: #6aa214;">
       <div style="background-color: #6aa214;">
           <table width="100%" cellspacing="0" cellpadding="0" align="center" height="auto" style="background:#6aa214">
               <tbody>
                   <tr>
                       <td>
                           <table id="header" border="0" cellspacing="0" cellpadding="0" width="auto" bgcolor="#6aa214"
                               align="center" height="68">
                               <tbody>
                                   <tr height="20">
                                       <td width="150">&nbsp;</td>
                                       <td width="548">&nbsp;</td>
                                   </tr>
                                   <tr>
                                       <td height="32" valign="bottom" width="150"><a href="http://ekosave.co"
                                               target="http://ekosave.co" rel="noopener noreferrer"
                                               data-auth="NotApplicable"><img data-imagetype="External"
                                                   src="https://www.leadis.co/brandimages/ekosave/ekoblanco200.png"
                                                   originalsrc="https://www.leadis.co/brandimages/ekosave/ekoblanco200.png"
                                                   data-connectorsauthtoken="1" data-imageproxyendpoint="/actions/ei"
                                                   data-imageproxyid="" border="0" alt="ekosave.co" width="200"
                                                   height="60"
                                                   style="min-width:200px;vertical-align:bottom; margin-bottom: -12px;"></a>
                                       </td>
                                       <td class="global-nav" height="32" valign="bottom" width="548" align="right"
                                           style="color:#ccc">
                                           <a href="http://eep.ekosave.co" target="_blank" rel="noopener noreferrer"
                                               data-auth="NotApplicable"
                                               style="padding-bottom:0px; padding-left:4px; padding-right:4px; font-family:arial; color:#ffffff; font-size:14px; text-decoration:none; padding-top:0px">
                                               Iniciar sesión</a> | <a href="https://leadis.co" target="_blank"
                                               rel="noopener noreferrer" data-auth="NotApplicable"
                                               style="padding-bottom:0px; padding-left:4px; padding-right:4px; font-family:arial; color: #ffffff; font-size:14px; text-decoration:none; padding-top:0px">
                                               Desarrollador</a> 
                                       </td>
                                   </tr>
                                   <tr height="11">
                                       <td width="150">&nbsp;</td>
                                       <td width="548">&nbsp;</td>
                                   </tr>
                               </tbody>
                           </table>
                       </td>
                   </tr>
               </tbody>
           </table>
           <table cellpadding="0" cellspacing="0" align="center" border="0" width="100%" style="background:#6aa214">
               <tbody>
                   <tr>
                       <td>
                           <table class="contentInner" style="max-width: 748px;backgroud:white;" align="center" border="0" width="auto" cellpadding="0"
                               cellspacing="0" style="background:rgb(255,255,255); border:1px solid rgb(221,221,221)">
                               <tbody style="background-color:white;">
                                
                                   <tr>
                                       <td>
                                           <table align="center" border="0" width="91%" cellpadding="0"
                                               cellspacing="0">
                                               <tbody>
                                                   <tr>
                                                       <td height="20"><span style="font-family:Arial"><br>
                                                           </span></td>
                                                   </tr>
                                                   <tr>
                                                       <td height="78" valign="top"
                                                           style="color:rgb(255,102,0); padding:10px; line-height:32px; font-size:24px">
                                                           <p style="font-family:Roboto;text-align: center;font-weight: 800;">
                                                               CAMBIO DE CONTRASEÑA
                                                           </p>
                                                       </td>
                                                   </tr>
                                                   <tr>
                                                       <td height="14"><span style="font-family:Arial"><br>
                                                           </span></td>
                                                   </tr>
                                                   <tr>
                                                       <td valign="top"
                                                           style="color:rgb(102,102,102); line-height:40px; font-size:18px">
                                                           <span class=""
                                                               style="font-family:Roboto; text-align: justify; line-height: 22px; font-size: 15px;">
                                                               <p class="normalText">
                                                                 Has solicitado restaurar tu contraseña para tu aplicación Ekosave asociado a la empresa <strong>${company.toUpperCase}</strong>.
                                                               </p>

                                                               <p class="normalText">
                                                                 La contraseña de recuperación es: <strong>${company.toUpperCase}</strong>.
                                                               </p>

                                                               <p class="normalText">
                                                                 <strong>NO OLVIDES CAMBIAR TU CONTRASEÑA UNA VEZ INGRESES A LA PLATAFORMA.</strong>.
                                                               </p>
                                                           </span>
                                                       </td>
                                                   </tr>
                                                   <tr>
                                                      

                                   <tr>
                                       <td height="20">&nbsp;</td>
                                   </tr>


                                   <tr height="200px" style="background: #ffffff;">
                                       <td height="20" style="padding-bottom: 20px;">
                                           <table align="center" border="0" width="91%" cellpadding="0" cellspacing="0"
                                               style=" background: #f0f0f0; height: 160px; ">
                                               <tbody>
                                                   <tr>
                                                       <td id="logoFooter" height="20" width="100%"><span style="font-family:Arial">
                                                               <a href="http://ekosave.co" target="http://ekosave.co"
                                                                   rel="noopener noreferrer"
                                                                   data-auth="NotApplicable"><img
                                                                       data-imagetype="External"
                                                                       src="https://www.leadis.co/brandimages/ekosave/eko.png"
                                                                       originalsrc="https://www.leadis.co/brandimages/ekosave/eko.png"
                                                                       data-connectorsauthtoken="1"
                                                                       data-imageproxyendpoint="/actions/ei"
                                                                       data-imageproxyid="" border="0" alt="ekosave.co"
                                                                       width="auto" height="100"
                                                                       style=""></a>
                                                       </td>
                                     
                                                   </tr>
                                               </tbody>
                                           </table>

                                       </td>
                                   </tr>
                               </tbody>
                           </table>
                       </td>
                   </tr>
               </tbody>
           </table>
           <table width="100%" cellspacing="0" cellpadding="0" align="center" height="auto" style="background:#6aa214; border: 1px solid #6aa214">
               <tbody>
                   <tr>
                       <td>
                           <table id="header" border="0" cellspacing="0" cellpadding="0" width="auto" bgcolor="#6aa214"
                               align="center" height="68">
                               <tbody>
                                   <tr height="20">
                                       <td width="150">&nbsp;</td>
                                       <td width="548">&nbsp;</td>
                                   </tr>
                                   <tr>

                                   </tr>
                                   <tr height="11">
                                       <td width="150">&nbsp;</td>
                                       <td width="548">&nbsp;</td>
                                   </tr>
                                   
                               </tbody>
                           </table>
                       </td>
                   </tr>
               </tbody>
           </table>
       </div>
   </div>
</div> `;

    return EMAIL_TEMPLATE;
}
