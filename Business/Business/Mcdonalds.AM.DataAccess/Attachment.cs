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
    
    public partial class Attachment
    {
        public System.Guid ID { get; set; }
        public string RefTableID { get; set; }
        public string RefTableName { get; set; }
        public string Name { get; set; }
        public string Extension { get; set; }
        public string RelativePath { get; set; }
        public string InternalName { get; set; }
        public string ContentType { get; set; }
        public Nullable<int> Length { get; set; }
        public string TypeCode { get; set; }
        public string CreatorID { get; set; }
        public Nullable<System.DateTime> CreateTime { get; set; }
        public Nullable<System.DateTime> UpdateTime { get; set; }
        public Nullable<int> Sequence { get; set; }
        public Nullable<int> IsDelete { get; set; }
        public Nullable<System.Guid> RequirementId { get; set; }
        public string CreatorNameZHCN { get; set; }
        public string CreatorNameENUS { get; set; }
        public bool IsHide { get; set; }
    }
}
