//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Mcdonalds.AM.DataAccess
{
    using System;
    using System.Collections.Generic;
    
    public partial class ReinvestmentBasicInfo
    {
        public int Id { get; set; }
        public System.Guid ConsInfoID { get; set; }
        public Nullable<System.DateTime> GBDate { get; set; }
        public Nullable<System.DateTime> ConsCompletionDate { get; set; }
        public Nullable<System.DateTime> ReopenDate { get; set; }
        public string NewDesignType { get; set; }
        public string EstimatedSeatNo { get; set; }
        public string RightSizingSeatNo { get; set; }
        public string NewDTSiteArea { get; set; }
        public string NewOperationSize { get; set; }
        public string NewKitchenSize { get; set; }
        public string NewDiningArea { get; set; }
        public string WallPanelArea { get; set; }
        public string WallGraphicArea { get; set; }
        public string FacadeACMArea { get; set; }
        public Nullable<bool> NewKiosk { get; set; }
        public Nullable<bool> NewAttachedKiosk { get; set; }
        public Nullable<bool> NewRemoteKiosk { get; set; }
        public Nullable<bool> NewMcCafe { get; set; }
        public Nullable<bool> NewMDS { get; set; }
        public Nullable<bool> NewTwientyFourHour { get; set; }
        public string DesignSeatNo { get; set; }
    }
}