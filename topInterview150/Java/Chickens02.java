//this is not a leetcode problem but was a good exercise.

public class Chickens02 {
    public static void main(String[] args) {
        //Put yout code here
        //Put yout code here
        int chickenCount = 8;
        int totalEggs = 0;
        
        for (int i = 1; i<= 30; i++){
            int day = 0+i;
            int eggsPerDay = 0;
            int dayOfTheWeek = (day-1) % 7;
            // System.out.println("day of the week: " + day);
            if (dayOfTheWeek == 0){
                System.out.println("monday." + dayOfTheWeek);
                eggsPerDay = 100;
            }else if(dayOfTheWeek == 1){
                //wednesday
                eggsPerDay = 121;
                System.out.println("tuesday. " + dayOfTheWeek);
            }else if(dayOfTheWeek == 2){
                eggsPerDay = 117;
                System.out.println("wednesday. " + dayOfTheWeek);
            }

            totalEggs += eggsPerDay;
            System.out.println("in day " + day + " the eggs were " + totalEggs + " and the chickens were " + chickenCount);   
        }
        // correct values: 
        
        // double dailyAverage = totalEggs / 30;
        // int monthlyAverage = totalEggs;
        // double monthlyProfit = totalEggs *= 0.18;
        
        //expected values 
        double dailyAverage = (100.00 + 121.00 + 117.00) / 3 ;
        double monthlyAverage = dailyAverage * 30;
        double monthlyProfit = monthlyAverage * 0.18;

        System.out.println("Daily Average:   " +dailyAverage);
        System.out.println("Monthly Average: " +monthlyAverage);
        System.out.println("Monthly Profit:  $" +monthlyProfit);
    }
    
}
