var salaryOperations = {
    hra(BasicSalary)
    {
        return BasicSalary*0.50;
    },
    da(BasicSalary)
    {
        return BasicSalary*0.20;
    },
     ta(BasicSalary)
    {
        return BasicSalary*0.10;
    },
     ma(BasicSalary)
    {
        return BasicSalary*0.40;
    },
     pf(BasicSalary)
    {
        return BasicSalary*0.30;
    },
     gs(BasicSalary)
     {
        return this.hra(BasicSalary)+this.da(BasicSalary)+this.ta(BasicSalary)+this.ma(BasicSalary);
     },
     ns(BasicSalary)
     {
         return this.gs(BasicSalary)-this.pf(BasicSalary);

    }
}

