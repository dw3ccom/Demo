/**
 * i18n: JavaScript function
 * Project: 
 * Release: Working copy
 * Locale: zh, 
 * Exported at: Thu, 07 May 2015 16:34:55 GMT 
 */
// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}
var _ = function( pairs ){
    
    // calc numeric index of a plural form
    function pluralIndex( n ){
        return Number( (n > 1) );
    }

    function lookup(msgid1, msgid2, n) {
        var value = pairs[msgid1];
        // singular if no multiplier
        if (null == n) {
            n = 1;
        }
        // plurals stored as objects, e.g. { 0: '' }
        if (value instanceof Object) {
            value = value[pluralIndex(n) || 0];
        }
        return value || (1 === n ? msgid1 : msgid2) || msgid1 || '';
    }

    function format(str, args) {
        return str.replace(/%(\d+)/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    }

    function parse(str, p1, p2, p3, offset, s) {

        // Extract msgid from 1nd capture group.
        var splitMsgId = p1.split('\!\!\!');
        var MsgId = splitMsgId[0];
        var MsgIdPlural = splitMsgId.length > 1 ? splitMsgId[1] : '';
        // Extract format items from 2rd capture group.
        var formatItems = p2.split('\|\|\|');
        // Extract comment from 3th capture group.
        var Comment = p3;
        return format(lookup(MsgId, MsgIdPlural, Number(formatItems[0])), formatItems);
    }

    // expose public t() function
    return function (nuggetStr) {
        return nuggetStr.replace(/\[\[\[(.+?)(?:\|\|\|(.+?))(?:\/\/\/(.+?))?\]\]\]/, parse);
    }
}( { "确认需要撤销吗？":"确认需要撤销吗？","柜台楼层1":"","柜台楼层2":"","Closure Package 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？":"Closure Package 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？","暂无数据":"","内容":"内容","MM & TA Description":"","打包下载":"打包下载","Closing Cost":"Closing Cost","招牌有效性":"","重开日期":"重开日期","Rebuild 重建":"Rebuild 重建","理想性":"","Leisure Remark":"","Sender":"","Management Fee Structure":"","Legal Review":"Legal Review","续约":"续约","PAC Market(%)":"PAC Market(%)","FA Actual vs Budget (ESSD)> +-5%":"FA Actual vs Budget (ESSD)> +-5%","the following must be submited to legal before signing the lease:":"","Renewal lease term longer than the original lease contract in case of sub-lease":"","暂无处理人":"","确定要进行退回吗？":"确定要进行退回吗？","Compensation (Payment)receipt":"Compensation (Payment)receipt","开发":"","Assets Manager":"Assets Manager","后区(sqm)":"","座位数":"","新增":""," [下载] ":" [下载] ","关店日期早于今天,Closure Memo将不能再修改了,您确定要修改吗？":"关店日期早于今天,Closure Memo将不能再修改了,您确定要修改吗？","Comp. GC(%) Macket":"Comp. GC(%) Macket","Remote Kiosk 2":"Remote Kiosk 2","Completion Date 不能早于 GB Date":"Completion Date 不能早于 GB Date","下一页":"","CFO":"CFO","成功变更项目状态":"","LEASE ABSTRACT":"","Comp. Sales(%)":"Comp. Sales(%)","更多 >":"更多 >","合同编号":"","租金构成":"","确认要删除？":"确认要删除？","Relocation Pipeline ID*":"Relocation Pipeline ID*","Transportation Hub":"","地址":"地址","创建日期":"","Reinvestment Cost":"","Major Lease Changes Type":"Major Lease Changes Type","编号":"","Shopping等级":"","Finance Manager":"Finance Manager","Occupancy as % of Prod Sales":"","请填写LegalComments":"请填写Legal Comments（If Any）","Relocation":"Relocation","Total Renewal Period Average:":"","营运面积":"营运面积","Original Data":"Original Data","Rebuild Package History":"Rebuild Package History","Yr16":"","起租日/Rent Commencement Date":"起租日/Rent Commencement Date","请选择Asset Actor！":"请选择Asset Actor！","1.The lease agreement reflects the options of renewal":"","Regional Manager":"Regional Manager","更多":"更多","（对餐厅营业额、利润、现金流、来客数的现状及递增趋势的简述，NBV，B.E.的组成及开发时间、投资额等）":"（对餐厅营业额、利润、现金流、来客数的现状及递增趋势的简述，NBV，B.E.的组成及开发时间、投资额等）","Comments & Conclusion":"","指示性招牌的数量":"","任务完成时间":"","冷库(sqm)":"","Renewal Tool":"","Variance %":"Variance %","Landlord Entity (Name)":"","McCafe":"McCafe","提前解约条款":"","2010年起合同是否有修订":"","Write Off Amount":"","确认审批通过吗":"确认审批通过吗","查询":"查询","Annual Sales":"","Other(Inc)/Exp(RMB)":"Other(Inc)/Exp(RMB)","Non-Product Sales(RMB)":"Non-Product Sales(RMB)","餐厅楼层/Floor":"餐厅楼层/Floor","Assets Rep":"Assets Rep","Closure Nature/关店形式":"Closure Nature/关店形式","请填写LHI Variance原因":"请填写LHI Variance原因","商圈大小":"","业主1名称":"","Interest LHI(RMB)":"Interest LHI(RMB)","请选择必要抄送人":"","Rebuild Finance Analysis History":"Rebuild Finance Analysis History","Brand Extension":"Brand Extension","是否属于联盟企业":"","撤回成功":"撤回成功","上一页":"","租赁/土地购置期限":"","Write off":"Write off","Re-open Date 不能早于 Construction Completion Date":"Re-open Date 不能早于 Construction Completion Date","业主1关键联系人电话":"","无记录":"无记录","业主2名称":"","Contribution Margin to MCOPCO MARGIN(%)*":"Contribution Margin to MCOPCO MARGIN(%)*","店外kiosk面积":"","Attach Kiosk":"","正在处理中，请稍等...":"正在处理中，请稍等...","Annual SOI (% & RMB)":"","保证金可退":"","INTEREST ESSD(RMB)":"","% of Sales（%）":"","Topic":"","城市":"城市","Managing Director * ":"Managing Director * ","OTHER (INC)/EXP(RMB)":"","排队等侯区":"","删除附件成功":"删除附件成功","业主3名称":"","续租通知最迟提交日":"","是否有指示性招牌":"","首页":"","合同列表":"","New Redline Area (sqm)":"New Redline Area (sqm)","LHI_NBV":"LHI_NBV","原租金构成":"","Service Fee(RMB)":"Service Fee(RMB)","地点":"地点","银行保函":"","说明":"","员工室(sqm)":"","MajorLease":"MajorLease","确认":"确认","最近现有餐厅":"","Store Basic Info":"Store Basic Info","Legal Department Review":"","The Change of red line":"The Change of red line","请填写Lease Change due to Rebuild":"请填写Lease Change due to Rebuild","PRODUCT SALES(RMB)":"","Lease Change due to Rebuild":"Lease Change due to Rebuild","保存":"保存","Market Manager *":"Market Manager *","银行保函终止日":"","游乐场":"","CFO * ":"CFO * ","Password":"密码","Comments and Conclusion":"Comments and Conclusion","Relocation Pipeline ID":"Relocation Pipeline ID","请上传Main Financial Index":"请上传Main Financial Index","Intermediaries":"","开工日期不能早于今天":"开工日期不能早于今天","业主":"","Managing Director *":"Managing Director *","展示面长度（米）":"","迁址?":"迁址?","登录失败，请联系管理员":"登录失败，请联系管理员","请选择迁址!":"请选择迁址!","关店日期":"关店日期","Re-open Date":"Re-open Date","业主负责人及具体联系人是否已引见":"","水电、单价确认并按合同执行":"","业主联系记录":"","Yr19":"","Remote kiosk":"","生成Executive Summary":"生成Executive Summary","OI Impact on Current Year":"OI Impact on Current Year","Total":"Total","标题":"","选择邮件通知人":"","请先上传Closing Cost！":"请先上传Closing Cost！","确认删除这条记录":"确认删除这条记录","请选择MDD!":"","地铁线总数":"","租赁期限、租金架构及其他特殊合同条款":"租赁期限、租金架构及其他特殊合同条款","Portfolio Type":"Portfolio Type","RE":"RE","商圈内居住人口":"","Site RE Rating":"","餐厅管理":"","成熟度":"","页":"页","电子邮件":"","GM":"GM","FM":"FM","必须填写":"必须填写","预计合同起始":"","MDD":"MDD","OM":"","请填写RE Cost Variance原因":"请填写RE Cost Variance原因","WO Check List 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？":"WO Check List 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？","MDS":"MDS","PM":"PM","Rebuild Package 审批流程已经完成，现在编辑会导致流程重新提交，是否确认":"Rebuild Package 审批流程已经完成，现在编辑会导致流程重新提交，是否确认","游乐场(sqm)":"","Asset Actor":"","Insurance(RMB)":"Insurance(RMB)","Licenses":"","Description":"Description","租约到期日期":"租约到期日期","Comp. GC(%)":"Comp. GC(%)","Asset Manager":"Asset Manager","餐厅所在物业性质":"","Closure Type":"Closure Type","Comp. Sales(%) Macket":"Comp. Sales(%) Macket","退回成功":"退回成功","租金起付日":"","G) Proposed Solution and Decision Logics":"G) Proposed Solution and Decision Logics","Non-Product Costs(RMB)":"Non-Product Costs(RMB)","Pending or threatened dispute with regard to the lease site. (pealse specify, if any)":"","Mini Market Priority":"","选择任务接收人":"选择任务接收人","当前选择":"当前选择","Seating Ratio":"","请先保存":"请先保存","City/城市":"City/城市","Impact Sales":"Impact Sales","Reopen Date":"","Landlord's form lease used - Unusual terms must be alerted by the Rep. in writing to other McD departments.":"","法律意见":"法律意见","KFC开业日期":"","Comments":"Comments","拒绝":"拒绝","临时关店":"","No authority to release":"","实际重开日期":"","业主谈判记录列表":"业主谈判记录列表","谈判内容":"谈判内容","新红线面积 （平方米）":"","请填写Reason Description for Negative Net CF NPV!":"请填写Reason Description for Negative Net CF NPV!","风险等级":"风险等级","DT场地面积":"","SOI as % Of Prod Sales":"","请填写Finance Comments":"请填写Finance Comments","联系人":"","操作失败！":"操作失败！","商业街长度（米）":"","Play Place":"","Total write off data":"Total write off data","下一步":"下一步","预计合同到期":"","是否需要工程费用预估":"是否需要工程费用预估","公用停车位":"","总座位数":"","资产专员（当前）":"","Decoration（装饰）":"Decoration（装饰）","请选择风险等级!":"请选择风险等级!","人员信息":"","确定":"","业主3关联联系人职称":"","Rebuild Legal Review History":"Rebuild Legal Review History","下载":"下载","NON-PRODUCT COSTS(RMB)":"","是否阅读":"","Yes.The legal issure(s) below,if not resolved,the project should not proceed;other wise,it may cause serious damage to company's asset *":"","编号不能为空！":"编号不能为空！","Market/市场":"Market/市场","请选择资产发起人！":"请选择资产发起人！","产区":"","The change of Landlord":"The change of Landlord","Market Asset Mgr.":"","反腐败条款":"","选择餐厅":"选择餐厅","当前项目":"","当前第":"当前第","Approval Records":"","Write Off Data":"Write Off Data","请选择GM!":"","Other Issure":"","Other Compensation description":"Other Compensation description","No *":"","Remote Kiosk":"Remote Kiosk","保存失败":"保存失败","（事件的起因，发展及背景描述）":"（事件的起因，发展及背景描述）","GB Date":"","Asset Rep.":"","RE Cost(RMB)":"","Close Date":"Close Date","Nearest KFC Sales/Year":"","Others":"Others","City ZHCN":"City ZHCN","Actual VS Budget":"Actual VS Budget","2.The lease agreement reflects reinstatement requirement":"","只能选择一个人":"只能选择一个人","Head of Development":"Head of Development","服务区(sqm)":"","Uploaded By":"Uploaded By","Total NBV":"Total NBV","Owner refuses to honor the lease in place of landlord,so there is a risk that our lease will be terminated if the original lease contract is terminated.":"","PAC(RMB)":"PAC(RMB)","合同类型":"","提交":"提交","Financial Input TTM Financial Data & Historical Financial Data(RMB)":"Financial Input TTM Financial Data & Historical Financial Data(RMB)","请选择关店日期!":"请选择关店日期!","McD's EP Right  (Y/N)":"","Agent's service includes Interaction with Government Officials":"","Initial Investments":"","重开业日期":"重开业日期","SERVICE FEE(RMB)":"","物业里主要商户2的名称":"","请选择Store Re-image status(餐厅是否停业改造)":"请选择Store Re-image status(餐厅是否停业改造)","Approval Date":"Approval Date","Seating（桌椅）":"Seating（桌椅）","NBV(Closure Data)":"NBV(Closure Data)","US Code":"US Code","审批流程已经完成，现在编辑会导致流程重新提交，是否确认？":"","Total Sales (RMB)":"Total Sales (RMB)","业主3关键联系人名称":"","总地铁方向看餐厅的可视性":"","Yr13":"","资产代表":"资产代表","财务列表":"","附件":"附件","No. of KFC":"","Straight-line Rent+M.Fee for the Last Tenancy Year（Original)/1st Tenancy Year(New) (RMB)":"","Receiver":"","整体可接近度":"","新租金构成":"","B.E. (Type)":"","Yr1(New Term)":"","Closure Info":"Closure Info","Renewal lease term longer than the letter or authorization in case of entrust lease":"","Remarks,if the figure is negative,it means Wepay the Compensation to the landlord.备注：如果金额为负数，则表示麦当劳需向业主支付赔偿。":"Remarks,if the figure is negative,it means Wepay the Compensation to the landlord.备注：如果金额为负数，则表示麦当劳需向业主支付赔偿。","请上传Signed Termination Agreement":"请上传Signed Termination Agreement","审批":"审批","RDD":"","Finace Manger":"Finace Manger","页/共":"页/共","Decision Logic and Recomendation":"Decision Logic and Recomendation","请选择RDD":"","Cons Info 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？":"Cons Info 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？","Regional  Manager":"Regional  Manager","确认要删除":"确认要删除","TempClosure Date 不能早于今天":"TempClosure Date 不能早于今天","投资组合":"","联系人信息":"","FA Investment Tool":"FA Investment Tool","Renewal ConsInfo History":"Renewal ConsInfo History","确认退回吗":"确认退回吗","创建人":"","City":"City","上班族情况":"","Project Create Date":"Project Create Date","Closure Start Date":"","Plan for relocation? 有迁店的计划？":"Plan for relocation? 有迁店的计划？","如果您已完成填写，请点击":"如果您已完成填写，请点击","TTM":"TTM","请选择Market Manager!":"","合同起始年":"","Uploaded Date":"Uploaded Date","Finish":"","One Time OI Impact":"One Time OI Impact","员工室":"","FC":"FC","The Shop in Trade Area":"","是否地产经纪":"","OC":"","数据验证不通过，请检查后重试":"数据验证不通过，请检查后重试","Last Tenancy Year:":"","Special Clauses (Pls specify)":"","DEPRECIATION ESSD(RMB)":"","不需要再投资":"不需要再投资","日期:":"日期:","Attached Kiosk 2":"Attached Kiosk 2","主要合同":"","服务区":"","会面时间":"会面时间","Market DD * ":"Market DD * ","成功恢复项目":"","Legal *":"Legal *","删除附件失败":"删除附件失败","人口":"","The Change of the rental":"The Change of the rental","Store Name CN":"Store Name CN","表单":"","资产交接":"","英文名称":"英文名称","工程":"","美国编号":"美国编号","Construction":"","缺少描述信息，请在WO模板中填写Description for LHI Variance>+-5%后再重新上传":"缺少描述信息，请在WO模板中填写Description for LHI Variance>+-5%后再重新上传","MCCL Equipment":"MCCL Equipment","确定中止项目吗？":"","请填写Total Variance原因":"请填写Total Variance原因","School Remark":"","Finance Analysis 审批流程已经完成，现在编辑会导致流程重新提交，是否确认":"Finance Analysis 审批流程已经完成，现在编辑会导致流程重新提交，是否确认","ESSD_NBV":"ESSD_NBV","Remark":"Remark","Contribution Margin(%)":"","优先级":"优先级","业主1关联联系人职称":"","成功":"","Write Off Actual Checking":"Write Off Actual Checking","餐厅电话":"","Transport Hub Remark":"","STORE CHARACTER":"","StoreType":"StoreType","Any Legal Concerns":"","区县":"","通知相关人":"通知相关人","文件交接":"","Future Cashflow impact":"Future Cashflow impact","McD's Early Termination Right  (Y/N)":"","Pending":"Pending","提交失败":"提交失败","Reimage Date":"","VPGM *":"VPGM *","请填写Compensation":"请填写Compensation","User:":"User:","规划经理（开业时）":"","资产经理":"资产经理","撤回":"撤回","Store Management":"","业主2关联联系人职称":"","Finance Actual":"Finance Actual","MCCL Asset Director *":"MCCL Asset Director *","下载模板失败，请稍后重试":"下载模板失败，请稍后重试","商圈类型":"","该流程的开启通知及对应任务，会发送给下列人员：":"该流程的开启通知及对应任务，会发送给下列人员：","Province":"Province","GC Comp%":"GC Comp%","H) Sales Transfer after Closure &Assets Write-Off":"H) Sales Transfer after Closure &Assets Write-Off","共楼层数":"","排他协议":"","Lease Tenure & Term":"","Shop":"","请上传补充协议":"请上传补充协议","如果需要发送通知给其他人员，请从下面列表中选择":"如果需要发送通知给其他人员，请从下面列表中选择","LandloadName":"LandloadName","Create Time":"","Renewal Confirm Letter 审批流程已经完成，现在编辑会导致流程重新提交，是否确认":"Renewal Confirm Letter 审批流程已经完成，现在编辑会导致流程重新提交，是否确认","TTM Yr-2":"TTM Yr-2","状态":"状态","新租约起始日期":"新租约起始日期","开工日期":"开工日期","Data Month:":"Data Month:","麦当劳方参与人":"麦当劳方参与人","失效":"失效","预计合同起始日期":"","学生情况":"","地产经纪":"","新租约到期日期":"新租约到期日期","Title":"Title","Legal Comments":"Legal Comments（If Any）","Reimage Summary":"Reimage Summary","New Investment (RMB)":"New Investment (RMB)","请填写关店原因!":"请填写关店原因!","餐厅绩效以及财务数据描述":"餐厅绩效以及财务数据描述","Re-open Date 不能早于 GB Date":"Re-open Date 不能早于 GB Date","提交成功":"提交成功","Original Investment (RMB)":"","永久":"永久","若未引荐，计划引荐时间":"","Yr15":"","Title:":"Title:","Head of Development*":"Head of Development*","生成成功！":"生成成功！","Cash Flow NPV_After Change":"Cash Flow NPV_After Change","Re-open Date 不能早于 TempClosure Date":"Re-open Date 不能早于 TempClosure Date","GBMemo 审批流程已经完成，现在编辑会导致流程重新提交，是否确认":"GBMemo 审批流程已经完成，现在编辑会导致流程重新提交，是否确认","请选择Finance！":"请选择Finance！","Compensation Awarded? 获得赔偿?":"Compensation Awarded? 获得赔偿?","失败":"","交通枢纽类型":"","租金结构描述/Rent Structure":"租金结构描述/Rent Structure","省份":"","Store Status":"Store Status","银行保函编号":"","Shop Remark":"","Closure Tool 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？":"Closure Tool 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？","停车位合计":"","Amount:":"","Not Endorsed":"","Store Type":"Store Type","项目ID":"","Meeting Date":"","Net CF NPV（RMB）":"Net CF NPV（RMB）","请上传正确的文件":"请上传正确的文件","Genarate":"Genarate","Market":"Market","银行保函起始日":"","Operation":"","Store Name_CN":"Store Name_CN","最近KFC":"","24 Hour":"24 Hour","School":"","B)  Store Briefing / Characteristics":"B)  Store Briefing / Characteristics","Original CF NPV":"Original CF NPV","厨房楼层":"","Additional Investment Cost (RMB)":"","座位区(sqm)":"","预计合同到期日期":"","待办列表":"","添加必要抄送人":"添加必要抄送人","Endorsement":"","Rental Structure":"","是否需要发送邮件通知":"","临时关店信息":"","项目":"项目","-- 请选择 --":"-- 请选择 --","Work销售占比":"","卫生间(sqm)":"","请先上传 Signed Approval 附件!":"请先上传 Signed Approval 附件!","物业里主要商户1的名称":"","B.E":"B.E","距离":"","餐厅经理":"","请填写Comments":"请填写Comments","临时":"临时","Project Id":"Project Id","Relocation Option offered?":"Relocation Option offered?","Other (please specify) 其他（请描述）:":"Other (please specify) 其他（请描述）:","Yr8":"","Yr9":"","进口数量":"","红线变更":"","Yr4":"","Yr5":"","Yr6":"","Yr7":"","Yr1":"","添加更多抄送对象":"添加更多抄送对象","Yr2":"","Yr3":"","操作成功":"操作成功","Renewal LLNegotiation 审批流程已经完成，现在编辑会导致流程重新提交，是否确认":"Renewal LLNegotiation 审批流程已经完成，现在编辑会导致流程重新提交，是否确认","最近现有餐厅营业额":"","关键字":"","否":"否","Closing Cost（拆店费用）":"Closing Cost（拆店费用）","银行保函额":"","消防逃生门是否符合规范（逃生通道是否与其他租户共用）":"","Endorsement by General Counsel":"","合同方名称":"","GBMemo":"GBMemo","迁址":"迁址","利益冲突条款":"","Store Name EN":"Store Name EN","业务拓展":"","Last Year":"","提前解约描述":"","财务信息":"","Renewal Analysis History":"Renewal Analysis History","LHI（工程装修）":"LHI（工程装修）","谈判主题":"谈判主题","Closure Memo":"Closure Memo","Yr10":"","Yr20":"","物业的商业面积":"","Operation Size (SQM)":"","选择Package":"选择Package","路边停车位":"","Cash ROI (%)":"","F) Negotiation History":"F) Negotiation History","页 共":"页 共","Total Sales(RMB)":"Total Sales(RMB)","提交失败！":"提交失败！","Compensation/赔偿":"Compensation/赔偿","Reimage 1st Rd Filter":"","Finance Analysis 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？":"Finance Analysis 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？","ESSD(RMB)":"","卫生间":"","Rejected":"Rejected","Yr18":"","SOI%":"SOI%","FC *":"FC *","Date:":"Date:","完工日期":"完工日期","项目创建日期":"","RE Cost（地产费用）":"RE Cost（地产费用）","Seats (No., Indoor/Outdoor)":"","翻新信息":"翻新信息","Other (please specify) 其他（请描述）: ":"Other (please specify) 其他（请描述）: ","Renewal LLNegotiation History":"Renewal LLNegotiation History","资产经理（当前）":"","Renewal Tool History":"Renewal Tool History","Trade Area Desirability":"","区域":"区域","店外kiosk面积(sqm)":"","职位":"","Closure Date":"Closure Date","Upon Renewal":"","Annual Rent Expense":"","MM名称":"","业主2关键联系人电话":"","租赁合同租期/Leasing Term":"租赁合同租期/Leasing Term","楼梯(sqm)":"","Cash Flow NPV_Current":"Cash Flow NPV_Current","生成ClosureTool":"生成","PAC(%)":"PAC(%)","Other Issues (Pls specify)":"","待批复":"","Construction Manager *":"Construction Manager *","请上传Confirm Letter":"请上传Confirm Letter","缺少描述信息，请在WO模板中填写Description for RE Cost Variance>+-5%后再重新上传":"缺少描述信息，请在WO模板中填写Description for RE Cost Variance>+-5%后再重新上传","No.":"","创建失败":"创建失败","Agent:":"","请选择关店类型!":"请选择关店类型!","上传人":"上传人","Rent Structure (Whole lease term)":"","2nd Est.Impact":"","审批人":"审批人","Remote Kiosk 3":"Remote Kiosk 3","主要合同信息":"主要合同信息","Store Code":"Store Code","Market DD":"Market DD","必须选择":"必须选择","Endorsed":"","IRR(%)(With lease Option)*":"IRR(%)(With lease Option)*","Illegal structure":"","提交日期":"","柜台楼层座位数不能大于总座位数":"柜台楼层座位数不能大于总座位数","保证金金额":"","请上传Confirmed Renewal Contract":"请上传Confirmed Renewal Contract","请输入用户编号":"请输入用户编号","Status":"Status","Recall":"","租金支付方式":"","Decision Logic":"Decision Logic","Avg Renewal Period":"","Potential to permanent close? 有机会永久关店？":"Potential to permanent close? 有机会永久关店？","物业管理公司":"","New Lease Change Expirary(Date)":"New Lease Change Expirary(Date)","Submittal and Approval Records":"Submittal and Approval Records","资产管理":"","Active":"Active","开业日期":"开业日期","竞争对手所在":"","Attached Kiosk":"Attached Kiosk","餐厅类别":"","Approval By":"Approval By","租赁日期":"","完工日期不能早于开工日期":"完工日期不能早于开工日期","请选择Asset Rep！":"请选择Asset Rep！","Competitors":"","拒绝成功":"拒绝成功","终止项目没有成功":"","退回失败":"退回失败","Fair Market Rent (RMB) per appraisal":"","面积（sqm）":"","No. of KFC to be Opened in Y1":"","甲方全称":"","请选择Construction Manager！":"请选择Construction Manager！","Sales Comp%":"Sales Comp%","国家级发展区域":"","该流程的开启通知及对应任务，会发送给下列人员":"","请上传Investment Cost":"请上传Investment Cost","Amount(New Tenancy):":"","Total Reinvestment(RMB)":"","Address(CN)":"Address(CN)","地址_中文":"地址_中文","工程经理（开业时）":"","Home":"","缺少描述信息，请在FA模板中填写Explanation_FA Actual vs Budget (Total)>+-5%后再重新上传":"缺少描述信息，请在FA模板中填写Explanation_FA Actual vs Budget (Total)>+-5%后再重新上传","ESSD":"ESSD","Summary":"","合同到期年份":"合同到期年份","完成":"完成","Store Name_EN":"Store Name_EN","其他(sqm)":"","年均吞吐量":"","呈递审批记录":"呈递审批记录","业主3关键联系人电话":"","上传时间":"上传时间","请先下载Renewal Tool模板":"","立杆招牌数量":"","关店":"关店","内部设计":"","餐厅100米内公交车站总数":"","Pipeline Name":"Pipeline Name","审批人:":"审批人:","Mortgage or sealed up by the court (please specify in case of being sealed up by the court)":"","请选择Re-open Date":"请选择Re-open Date","Difference":"Difference","商圈内工作人口":"","请至少选择一项Reason for Closure":"请至少选择一项Reason for Closure","来源":"","提交人":"","未到Expire year，关店类型不能选择Lease Expiry!":"未到Expire year，关店类型不能选择Lease Expiry!","合同到期年":"","退回":"退回","餐厅离最近公交站的距离（米）":"","Store Name":"Store Name","ReImaging Date":"ReImaging Date","需要再投资":"需要再投资","（最后的建议，做出该建议的判断逻辑，包括Profitability Analysis，法律意见，发展、营运方面的考量等）":"（最后的建议，做出该建议的判断逻辑，包括Profitability Analysis，法律意见，发展、营运方面的考量等）","The Building Located":"","建议及判断逻辑":"建议及判断逻辑","请先下载模板":"请先下载模板","Key Measures":"Key Measures","产区(sqm)":"","原租约起始日期":"原租约起始日期","请选择PM！":"请选择PM！","Location":"","删除":"删除","页面初始化出错,点击确定重新加载":"页面初始化出错,点击确定重新加载","NBV（RMB）as of Lease End":"","付款信息":"","MDD *":"MDD *","Content":"","Reimage Package History":"Reimage Package History","Floor Level(s) Incl. FC level":"","处理":"","Home Remark":"","Executive Summary":"Executive Summary","Changes Type":"Changes Type","Fin.Adjustment":"Fin.Adjustment","项目成员":"项目成员","Yr12":"","附件列表":"","其他":"","零售活动强度":"","重开日期不能早于完工日期":"重开日期不能早于完工日期","Contribution Margin to Cashflow(%)*":"Contribution Margin to Cashflow(%)*","Open Date":"Open Date","开口数量":"","请选择Head of Development":"","Other CF NPV":"Other CF NPV","Cash Compensation(RMB)":"Cash Compensation(RMB)","DO *":"DO *","Equipment（设备）":"Equipment（设备）","手机":"","（餐厅历史简述，B.E.，楼层、面积、座位数及其他物理特征描述）":"（餐厅历史简述，B.E.，楼层、面积、座位数及其他物理特征描述）","Reinvestment Type (再投资类型）":"Reinvestment Type (再投资类型）","Yr1 SOI(%)*":"v","请选择VPGM!":"","Seating":"Seating","Equipment":"Equipment","Market Manager * ":"Market Manager * ","第二近现有餐厅开业日期":"","联盟名称":"","关店原因":"关店原因","请先填写意见":"请先填写意见","列举TA的其他影响因素":"","SOI(%)":"SOI(%)","Item":"Item","LHI(RMB)":"","请上传After Renewal Store layout":"请上传After Renewal Store layout","提醒":"","关店后的销售额转移及资产报废情况":"关店后的销售额转移及资产报废情况","生成失败":"生成失败","Signage":"Signage","Asset Rep":"Asset Rep","请选择关店原因!":"请选择关店原因!","确认需要撤销呈递吗？":"","User Name":"用户名","Current Future Impact":"Current Future Impact","Renewal LegalApproval History":"Renewal LegalApproval History","Finance Controller *":"Finance Controller *","Reimaging 餐厅形象翻新":"Reimaging 餐厅形象翻新","批复":"批复","项目类型":"项目类型","Net CF NPV(RMB)":"Net CF NPV(RMB)","租赁年数":"租赁年数","业主同意承担的工程增加费用是否已支付":"","条记录":"条记录","Package":"Package","Finance Controller":"Finance Controller","对该Pipeline估计影响":"","ACCOUNTING(RMB)":"","Reimage":"Reimage","FA Write - off Tool":"FA Write - off Tool","Others销售占比":"","Attached Kiosk 1":"Attached Kiosk 1","Fair Market  Rent(RMB) per Approval":"","滞纳金条款":"","FA Actual vs Budget (RE Cost)> +-5%":"FA Actual vs Budget (RE Cost)> +-5%","Renewal Legal Approval 审批流程已经完成，现在编辑会导致流程重新提交，是否确认":"Renewal Legal Approval 审批流程已经完成，现在编辑会导致流程重新提交，是否确认","Occupancy as % Of Prod Sales":"","末页":"","共":"","餐区面积(sqm)":"","厨房面积(sqm)":"","Lease Change Package 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？":"Lease Change Package 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？","请选择CFO":"","请上传Signed Package":"请上传Signed Package","抄送人：":"抄送人：","Legal":"Legal","Rent as % Of Prod Sales":"","BE列表":"","餐区面积":"","是":"是","餐厅Email":"","用户:":"用户:","Net Operating Income":"Net Operating Income","Cash ROI%":"","拒绝失败":"拒绝失败","商圈":"","Original Lease":"","Est Impact":"","最近现有餐厅开业日期":"","（会议、往来函件和电话沟通的时间、内容、相关部门等）":"（会议、往来函件和电话沟通的时间、内容、相关部门等）","千仓(sqm)":"","合同模式":"","餐厅100米内公交线总数":"","招牌已按合同中效果图安装到位":"","发送成功":"发送成功","New Site Net CF NPV":"New Site Net CF NPV","CASH ROI%":"","Managing Director":"Managing Director","Finance":"Finance","请先填写Comments & Conclusion！":"","请选择":"","Rebuild ConsInfo History":"Rebuild ConsInfo History","Assets Inputs(RMB)":"Assets Inputs(RMB)","餐厅所在楼层":"","Region":"Region","Equipment Transfer":"Equipment Transfer","Free Rental Period":"","撤回失败":"撤回失败","确定要进行审批吗？":"确定要进行审批吗？","TA":"","重建":"重建","关店日期不能早于今天!":"关店日期不能早于今天!","Renewal Letter History":"Renewal Letter History","正在提交，请稍等...":"正在提交，请稍等...","业主名称":"","Original Contract Info":"","页面初始化出错":"页面初始化出错","Project Type":"Project Type","Not endorsed due to above legal issure(s) No.":"","Landlord Dispute 业主纠纷":"Landlord Dispute 业主纠纷","项目创建时间":"项目创建时间","Finance Manager *":"Finance Manager *","Completed":"Completed","结束":"结束","成功终止项目":"","调整数据部分":"调整数据部分","Renewal Package 审批流程已经完成，现在编辑会导致流程重新提交，是否确认":"Renewal Package 审批流程已经完成，现在编辑会导致流程重新提交，是否确认","USCode":"USCode","地产评分":"","请填写Negative Net Cashflow NPV Reason Description":"请填写Negative Net Cashflow NPV Reason Description","Action:":"Action:","租赁历史":"","CreateDate":"","变更类型":"","缺少描述信息，请在WO模板中填写Description for ESSD Variance>+-5%后再重新上传":"缺少描述信息，请在WO模板中填写Description for ESSD Variance>+-5%后再重新上传","座机":"","业主联系人":"","姓名":"","确认需要Return吗？":"确认需要Return吗？","时间":"时间","预计临时关店日期":"","请先生成ExecutiveSummary":"请先生成ExecutiveSummary","可输入至多20个字符":"","TTM Yr-1":"TTM Yr-1","Cashflow growth(%) following years*":"Cashflow growth(%) following years*","MM优先级":"","总商业面积（平方米）":"","Work Remark":"","麦当劳实体":"","其他未尽事项":"","原租约业主":"","My Comments":"","最终引荐时间":"","确认成功":"确认成功","NON-PRODUCT SALES(RMB)":"","A) Mini-market, Trade Area and Site":"A) Mini-market, Trade Area and Site","Government license or permits cannot be obtained with regard to the lease site (e.g. environment, fire prevention, signage etc.)":"","TV Market":"","Due Rent for 1st Tenancy Year (New) (RMB)":"","请选择资产代表！":"请选择资产代表！","请选择Managing Director":"","Yes":"","是否由联盟团队推荐":"","恢复项目没有成功":"","业主1关键联系人名称":"","Reinvestment超过310K，请选择‘More Than 50K USD（RMB310K）’进行填写":"","Renewal Analysis 审批流程已经完成，现在编辑会导致流程重新提交，是否确认":"Renewal Analysis 审批流程已经完成，现在编辑会导致流程重新提交，是否确认","请先上传 Signed Approval 附件":"请先上传 Signed Approval 附件","请填写意见":"请填写意见","撤销失败":"","原租约到期日期":"原租约到期日期","请上传Write Off Agreement":"请上传Write Off Agreement","Lease changes due to Rebuild":"","Rental Deviation%":"","Write-off (RMB)":"Write-off (RMB)","LHI":"LHI","Taxes&Licenses(RMB)":"Taxes&Licenses(RMB)","已完成":"","请上传Renewal Contract Draft":"请上传Renewal Contract Draft","Recent Transfer":"","RENT(RMB)":"","Renewal Letter 审批流程已经完成，现在编辑会导致流程重新提交，是否确认":"Renewal Letter 审批流程已经完成，现在编辑会导致流程重新提交，是否确认","请上传Draft Termination Agreement":"请上传Draft Termination Agreement","TAXES & LICENSES(RMB)":"","Closure Reason":"Closure Reason","呈递":"呈递","柜台楼层座位数不能大于总座位数！":"柜台楼层座位数不能大于总座位数！","再投资类型":"再投资类型","新租约业主":"","续约信息":"续约信息","Current":"","修订日期":"","Avg Sales of KFC/Y":"","编辑":"编辑","重新开业时间":"重新开业时间","关店日期早于等于今天,Closure Memo将不能再修改了,您确定要修改吗？":"","Closure Executive Summary 流程已经完成，现在编辑会导致流程重新提交，是否确认？":"Closure Executive Summary 流程已经完成，现在编辑会导致流程重新提交，是否确认？","餐厅类型":"","是否有立杆招牌":"","操作失败":"操作失败","正在初始化页面，请稍等":"正在初始化页面，请稍等","撤销成功":"","餐厅开业日/Opening Date":"餐厅开业日/Opening Date","新租约到期日期必须在新租约起始日期之后":"新租约到期日期必须在新租约起始日期之后","地铁":"","Major Lease Change":"Major Lease Change","业主方参与人":"业主方参与人","待处理":"","餐厅列表":"","Asset Management":"","原租约到期日期（年月日）":"","请选择Legal！":"请选择Legal！","返回":"","DT场地面积(sqm)":"","Construction Manager":"Construction Manager","Remarks,if the figure is negative,it means We pay the Compensation to the landlord.备注：如果金额为负数，则表示麦当劳需向业主支付赔偿。":"","Anual Rent Expense":"","Reason Description for Negative Net CF NPV":"Reason Description for Negative Net CF NPV","取消":"取消","抄送人":"","Interest ESSD(RMB)":"Interest ESSD(RMB)","无数据":"","Net CF NPV (RMB)":"Net CF NPV (RMB)","Renewal Cons Info 审批流程已经完成，现在编辑会导致流程重新提交，是否确认":"Renewal Cons Info 审批流程已经完成，现在编辑会导致流程重新提交，是否确认","No":"","Yr17":"","地产经理（开业时）":"","To":"","None of Above":"","Last Year(Initial Term)":"","DECISION LOGIC & RECOMMENDATION":"","业主信息":"","实际临时关店日期":"","设计风格":"","FA Actual vs Budget (LHI)> +-5%":"FA Actual vs Budget (LHI)> +-5%","座位数/Seating":"座位数/Seating","结果上传":"结果上传","NBV(Closure Date)":"","VPGM":"VPGM","Occupying fire exit or other cllectively owned area":"","Planned Closure 策略性关店":"Planned Closure 策略性关店","Negative Net Cashflow NPV Reason Description":"Negative Net Cashflow NPV Reason Description","Year":"","（简述该小型市场、商圈和点portfolio的现状及未来发展趋势，relocation的计划）":"（简述该小型市场、商圈和点portfolio的现状及未来发展趋势，relocation的计划）","中文名称":"中文名称","请上传Rnewal Letter":"请上传Rnewal Letter","Investment*":"Investment*","City ENUS":"City ENUS","关店信息":"关店信息","发送":"","地产代表（开业时）":"","请先填写意见!":"请先填写意见!","是否有第三方共用的场地、费用如何分配":"","Sales Comp(%)":"","后区":"","Cash Flow(RMB)":"Cash Flow(RMB)","ReimageSummary History":"ReimageSummary History","财务":"","Last Remodeling (Date, Investment Cost, Work Scope)":"","请先生成ClosureTool":"请先生成ClosureTool","第二近现有餐厅":"","Pipeline来源":"","MCCL IT":"MCCL IT","Renewal Package History":"Renewal Package History","租金变更":"","Construction Finish Date":"","合同信息":"","缺少描述信息，请在FA模板中填写Explanation_FA Actual vs. Budget (ESSD)>+-5%后再重新上传":"缺少描述信息，请在FA模板中填写Explanation_FA Actual vs. Budget (ESSD)>+-5%后再重新上传","请填写Reason for Closure":"请填写Reason for Closure","Head of Development *":"Head of Development *","LL Participants":"","上传失败":"上传失败","楼层及座位":"","删除Record失败":"删除Record失败","租金支付对象":"","整体可见度":"","缺少描述信息，请在WO模板中填写Description for Total Variance>+-5%后再重新上传":"缺少描述信息，请在WO模板中填写Description for Total Variance>+-5%后再重新上传","SOI(%) Market":"SOI(%) Market","请选择 Major Lease Changes Type!":"请选择 Major Lease Changes Type!","保证金退还日期":"","Generators":"","Total Write Off":"","请填写正确的Key Measures 信息":"请填写正确的Key Measures 信息","DO":"","餐厅简介/描述":"餐厅简介/描述","Leisure销售占比":"","Construction Completion Date 不能早于 GB Date":"Construction Completion Date 不能早于 GB Date","财务意见":"财务意见","Party Room":"","座位区":"","CASH FLOW(RMB)":"CASH FLOW(RMB)","招牌和停车位":"","是否分体厨房":"","MCCL Cons Manager":"MCCL Cons Manager","Impact On Other Stores(RMB)":"Impact On Other Stores(RMB)","座位数量-室外":"","麦当劳停车位":"","New Investment(RMB)":"New Investment(RMB)","Product Sales(RMB)":"Product Sales(RMB)","请填写Reinvestment Cost":"","产权人":"","导出":"导出","临时关店日期":"临时关店日期","Rebuild ConsInvtChecking History":"Rebuild ConsInvtChecking History","BE Type":"BE Type","Landlord Remodel 业主改造":"Landlord Remodel 业主改造","请选择Reinvestment Amount Type":"","上传附件":"","物业开业日期":"","Write Off":"","收入水平":"","撤销":"撤销","关店类型":"关店类型","请上传Finance Analysis附件":"请上传Finance Analysis附件","Broker":"","餐厅面积/Store Area":"餐厅面积/Store Area","柜台楼层":"","Pre.Y1":"Pre.Y1","查看":"","物业里主要商户2的面积":"","Due Rent + M. Fee  for the Last Tenancy Year (Original) / 1st Tenancy Year (New) (RMB)":"","Legal Review 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？":"Legal Review 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？","Reason for Closure/关店原因":"Reason for Closure/关店原因","餐厅位于/The Store":"餐厅位于/The Store","请填写Write Off Amount":"","创建":"创建","当前没有数据":"","Store Name/店铺名称":"Store Name/店铺名称","PAC%":"PAC%","物业所有人联系人":"","保证金":"","请上传Current Store layout":"请上传Current Store layout","查看所有的留言":"","Renewal Clearance Report 审批流程已经完成，现在编辑会导致流程重新提交，是否确认":"Renewal Clearance Report 审批流程已经完成，现在编辑会导致流程重新提交，是否确认","Rent(RMB)":"Rent(RMB)","School销售占比":"","DT型号":"","Payment to third party":"","请先下载Write Off模板":"请先下载Write Off模板","Exclusivity Clause (Y/N)":"","（简述租赁合同中关键条款，租金的组成、数额、营业额占比等）":"（简述租赁合同中关键条款，租金的组成、数额、营业额占比等）","编辑选项":"","联系信息":"","Reject后该流程将直接终止，请确认需要执行该操作吗":"Reject后该流程将直接终止，请确认需要执行该操作吗","请输入数字":"请输入数字","是否联盟团队推荐":"","Renewal":"Renewal","餐厅基本信息":"餐厅基本信息","确认允许该餐厅进入Reimage PKG流程吗？":"","MCCL Cons Manager *":"MCCL Cons Manager *","无利益冲突条款或合法性条款":"","租赁面积":"","Decoration":"Decoration","请输入1000字以内的文字":"","项目高级查询":"项目高级查询","营运":"","D)  Store Performance & Financial Index":"D)  Store Performance & Financial Index","确定要提交吗？":"","请上传Write Off Actual Checking":"请上传Write Off Actual Checking","Enablers":"","列举前三个竞争对手名字":"","处理人":"","上传其他附件":"上传其他附件","Remote Kiosk 1":"Remote Kiosk 1","谈判过程":"谈判过程","请上传Legal Clearance Report":"请上传Legal Clearance Report","Relocation/迁址":"Relocation/迁址","柜台楼层座位数":"","生效":"生效","发送失败":"发送失败","Compensation (Payment)receipt(RMB)":"Compensation (Payment)receipt(RMB)","市场":"市场","业主2关键联系人名称":"","家庭收入水平":"","原红线面积（平方米）":"","Province/省份":"Province/省份","任务接受时间":"","购物中心数量":"","Shop销售占比":"","是否来源于产地（非Mapping结果）":"","Risk Status":"Risk Status","General Counsel":"General Counsel","[下载":"","请上传Store Layout":"请上传Store Layout","修订信息":"","免租期":"","Special Application":"","Other Remark":"","Record of negotiations":"","删除Record成功":"删除Record成功","Construction Investment Checking 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？":"Construction Investment Checking 审批流程已经完成，现在编辑会导致流程重新提交，是否确认？","Reimage ConsInfo History":"Reimage ConsInfo History","千仓":"","Site Portfolio Type":"","请选择Finance Manager！":"请选择Finance Manager！","GM *":"GM *","搜索":"","Comment":"","已办列表":"","共用隔油池/化粪池清理频率及费用约定":"","高级搜索":"","餐厅编号":"餐厅编号","新租约到期日期（年月日）":"","合同到期日期":"合同到期日期","创建时间":"创建时间","Comp Sales（%）":"","请上传Reinvestment Actual Checking":"请上传Reinvestment Actual Checking","Leased Area (SQM)":"","Future (Renewed Lease Period)":"","Yr11":"","选择":"选择","Lease Term*":"Lease Term*","物业里主要商户1的面积":"","Compensation":"Compensation","请填写法律意见":"请填写法律意见","Closure":"Closure","租金类型/Rent Type":"租金类型/Rent Type","项目状态":"","INTEREST LHI(RMB)":"","TTM Financial Data":"TTM Financial Data","MDC支付给DT餐厅业主的配套费发票是否已收到":"","Assets Actor":"Assets Actor","Real Estate":"","关店日期早于今天,确定要继续发送通知吗？":"关店日期早于今天,确定要继续发送通知吗？","投资类型":"","请填写ESSD Variance原因":"请填写ESSD Variance原因","历史版本":"","Signage（招牌）":"Signage（招牌）","总学生人数":"","FM *":"FM *","当前情况及背景说明":"当前情况及背景说明","Mcd Participants":"","FA Actual vs Budget (Total)> +-5%":"FA Actual vs Budget (Total)> +-5%","翻新":"","序号":"序号","Region/区域":"Region/区域","Lease Expire Date":"","请上传Clearance Report":"请上传Clearance Report","娱乐/消遣的性质列举":"","Financial Measures":"","任务":"","Total Investments":"Total Investments","预计重开日期":"","租赁类型":"","重建信息":"重建信息","物业所有人联系电话":"","主要竞争对手的数量":"","Write Off Variance Explanation":"Write Off Variance Explanation","Accounting(RMB)":"Accounting(RMB)","Depreciation ESSD(RMB)":"Depreciation ESSD(RMB)","资产专员":"资产专员","项目经理（开业时）":"","NPV Restaurant Cashflows until end lease*":"NPV Restaurant Cashflows until end lease*","保存成功":"保存成功","请选择FC!":"","Budget":"Budget","排队等侯区(sqm)":"","到期日/Lease Expiration Date":"到期日/Lease Expiration Date","DEPRECIATION LHI(RMB)":"","邮编":"","缺少描述信息，请在FA模板中填写Explanation_FA Actual vs. Budget (LHI)>+-5%后再重新上传":"缺少描述信息，请在FA模板中填写Explanation_FA Actual vs. Budget (LHI)>+-5%后再重新上传","Impact On Other Stores 至少填写一家餐厅":"Impact On Other Stores 至少填写一家餐厅","特征":"","Renewal LegalOpinion History":"Renewal LegalOpinion History","Home销售占比":"","生成":"生成","Yr14":"","SOI as % prod Sales":"","Major Generator(s)":"","选择审批人":"选择审批人","操作":"操作","请上传Agreement":"请上传Agreement","餐厅位置在主建筑的":"","楼层1":"","楼层3":"","餐厅里最近出口的距离（米）":"","楼层2":"","楼层5":"","楼层4":"","C)  Lease Terms, Rent Structure and Other Special Clause":"C)  Lease Terms, Rent Structure and Other Special Clause","上传报废清单":"上传报废清单","商圈信息":"","If the transaction involves":"","模块":"","物业地址":"","开工日期不能早于Temp Closure Date":"开工日期不能早于Temp Closure Date","The Change of lease term":"The Change of lease term","餐厅名称":"餐厅名称","请填写Actual Closure Date":"请填写Actual Closure Date","Depreciation LHI(RMB)":"Depreciation LHI(RMB)","Rent as % Prod Sales":"","厨房面积":"","通知":"通知","上传成功":"上传成功","交通枢纽销售占比":"","Store Address/店铺地址":"Store Address/店铺地址","Financial Measures(RMB)":"","基本信息":"","外观设计":"","意见":"意见","请填写Comments and Conclusion":"请填写Comments and Conclusion","E)  Current Situation/Background":"E)  Current Situation/Background","操作:":"操作:","Create Date":"Create Date","Government Redevelopment 政府改造":"Government Redevelopment 政府改造","Market Manager":"Market Manager","Actor":"Actor","业主方变更":"","24H":"24H","Landlord Name":"Landlord Name","Write-off(RMB)":"Write-off(RMB)","历史谈判记录":"","项目列表":"","Related Parties":"","地址_英文":"","物业所有人名称":"","上传":"上传","Reject后该流程将直接终止，请确认需要执行该操作吗？":"Reject后该流程将直接终止，请确认需要执行该操作吗？","面积":"","Pipeline Name*":"Pipeline Name*","Head of Development * ":"Head of Development * ","Attached Kiosk 3":"Attached Kiosk 3","职位:":"职位:","审批成功":"审批成功","Finance Analysis":"Finance Analysis","Renewal Tool 审批流程已经完成，现在编辑会导致流程重新提交，是否确认":"Renewal Tool 审批流程已经完成，现在编辑会导致流程重新提交，是否确认","INSURANCE(RMB)":"","SOX Audit":"","谈判记录":"","GBMemo History":"GBMemo History","联系方式":"","商圈名称":"","是否街铺":"","楼层":"","SPECIAL APPROVAL REQUIRED (Y/N, if yes, please specify)":"","资产发起人":"资产发起人","Rent Deviation(%):":"","Relocate Store/Pipeline Name  迁店后新店/Pipeline名称":"Relocate Store/Pipeline Name  迁店后新店/Pipeline名称","CFO *":"CFO *","Planner（开业时）":"","请填写Decision Logic And Recomendation":"请填写Decision Logic And Recomendation","总面积":"","描述":"","楼梯":"","确定恢复项目吗？":"","OFAC条款":"","文件名":"文件名","冷库":"","出口数量":"","Site Description":"","请上传Signed Renewal Contract":"请上传Signed Renewal Contract","Mortgagee refuses to guarantee the continue performance of our lease,so there is a risk that our lease will be terminated if the mortgage right is realized.":"","Comp assumption(%) following years*":"Comp assumption(%) following years*","Pre.Y2":"Pre.Y2","Design Type":"Design Type","租赁期限变更":"","缺少描述信息，请在FA模板中填写Explanation_FA Actual vs. Budget (RE Cost)>+-5%后再重新上传":"缺少描述信息，请在FA模板中填写Explanation_FA Actual vs. Budget (RE Cost)>+-5%后再重新上传","Reopen Date 不能早于 Construction Completion Date":"Reopen Date 不能早于 Construction Completion Date" } )