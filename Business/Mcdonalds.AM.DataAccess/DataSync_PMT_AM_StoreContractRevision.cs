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
    
    public partial class DataSync_PMT_AM_StoreContractRevision
    {
        public System.Guid Id { get; set; }
        public Nullable<System.Guid> StoreContractInfoId { get; set; }
        public string StoreCode { get; set; }
        public Nullable<int> LeaseRecapID { get; set; }
        public string ChangeDate { get; set; }
        public string Rent { get; set; }
        public string Size { get; set; }
        public string Entity { get; set; }
        public string Others { get; set; }
        public string Description { get; set; }
        public Nullable<System.DateTime> CreatedTime { get; set; }
        public Nullable<System.DateTime> SyncTime { get; set; }
        public Nullable<int> StoreID { get; set; }
        public string LeaseTerm { get; set; }
        public string RentStructureOld { get; set; }
        public string RentStructureNew { get; set; }
        public string RedlineAreaOld { get; set; }
        public string RedlineAreaNew { get; set; }
        public Nullable<System.DateTime> LeaseChangeExpiryOld { get; set; }
        public Nullable<System.DateTime> LeaseChangeExpiryNew { get; set; }
        public string LandlordOld { get; set; }
        public string LandlordNew { get; set; }
        public string SyncType { get; set; }
        public string RedlineDescription { get; set; }
        public string LeasetermDescription { get; set; }
        public string LandlordDescription { get; set; }
        public string OthersDescription { get; set; }
    }
}