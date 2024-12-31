//this is not a leetcode problem but was a good exercise.


public class Chickens01 {
    public static void main(String[] args) {
        //Put yout code here
        int eggsPerChicken = 4;
        int chickenCount = 8;
        int totalEggs = 0;
        // you can uptdate the count of the days by increasing the number into the i<= of the loop
        for (int i = 0; i<=2; i++){
            int day = 1+i;
            // System.out.println("day of the week: " + day);
            

            if (i == 1){
                //tuesday
                chickenCount++;
                System.out.println("tuesday: " + chickenCount);
            }
            if(i == 2){
                //wednesday
                chickenCount /= 2;
                System.out.println("wednesday: " + chickenCount);
                
            }

            int eggsPerDay = eggsPerChicken * chickenCount;

            totalEggs += eggsPerDay;
            System.out.println("in day " + day + " the eggs were " + totalEggs + " and the chickens were " + chickenCount);
            

        }

        System.out.println(totalEggs);
    }   
}
