using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_Assignment.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0,100)]
        public int Assignment { get; set; }
        [Required]
        [Range(0,100)]
        public int Group { get; set; }
        [Required]
        [Range(0, 100)]
        public int Quiz { get; set; }
        [Required]
        [Range(0, 100)]
        public int Midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public int Final { get; set; }
        [Required]
        [Range(0, 100)]
        public int Intex { get; set; }

    }
}
