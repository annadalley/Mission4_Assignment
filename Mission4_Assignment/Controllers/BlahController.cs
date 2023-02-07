using Microsoft.AspNetCore.Mvc;
using Mission4_Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_Assignment.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public IActionResult GradeCalc()
        {
            return View();
        }
        
        [HttpPost]
        public IActionResult GradeCalc (GradeCalcModel model)
        {
            return View();
        }


    }
}
