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
    
    public partial class SysApplicationLog
    {
        public System.Guid Id { get; set; }
        public string LogType { get; set; }
        public string ProjectId { get; set; }
        public string FlowCode { get; set; }
        public string CreateUser { get; set; }
        public string CreateFunction { get; set; }
        public string ReturnCode { get; set; }
        public string ReturnMessage { get; set; }
        public string Remark { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
    }
}