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
    
    public partial class DataSync_AM_PMT_StoreContractInfoAttached
    {
        public System.Guid Id { get; set; }
        public Nullable<System.Guid> StoreContractInfoID { get; set; }
        public int AttachedID { get; set; }
        public Nullable<int> TemplateID { get; set; }
        public string PageID { get; set; }
        public string Title { get; set; }
        public string DocName { get; set; }
        public Nullable<int> IsTemplete { get; set; }
        public string FilePath { get; set; }
        public string Comments { get; set; }
        public string CreateDate { get; set; }
        public string ModifyDate { get; set; }
        public string Owner { get; set; }
        public Nullable<int> Status { get; set; }
        public string LeaseRecapID { get; set; }
        public Nullable<double> FileSize { get; set; }
        public Nullable<System.DateTime> SyncTime { get; set; }
    }
}