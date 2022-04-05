import http from "k6/http";


export let options = {
    vus: 1,
    duration: '30s'
};
export default function() {
    let response = http.get("http://localhost:8080/hello/") // quarkus no graalvm
    // data_received..................: 9.9 MB 330 kB/s
    // data_sent......................: 10 MB  342 kB/s
    // http_req_blocked...............: avg=1.16µs   min=0s       med=1µs      max=1.85ms   p(90)=2µs      p(95)=2µs     
    // http_req_connecting............: avg=2ns      min=0s       med=0s       max=333µs    p(90)=0s       p(95)=0s      
    // http_req_duration..............: avg=219.52µs min=156µs    med=204µs    max=157.92ms p(90)=250µs    p(95)=279µs   
    //   { expected_response:true }...: avg=219.52µs min=156µs    med=204µs    max=157.92ms p(90)=250µs    p(95)=279µs   
    // http_req_failed................: 0.00%  ✓ 0           ✗ 119221
    // http_req_receiving.............: avg=15.76µs  min=10µs     med=15µs     max=1.44ms   p(90)=19µs     p(95)=21µs    
    // http_req_sending...............: avg=5.11µs   min=3µs      med=5µs      max=309µs    p(90)=8µs      p(95)=9µs     
    // http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
    // http_req_waiting...............: avg=198.65µs min=141µs    med=185µs    max=157.77ms p(90)=225µs    p(95)=251µs   
    // http_reqs......................: 119221 3973.800601/s
    // iteration_duration.............: avg=247.46µs min=176.73µs med=230.51µs max=159.96ms p(90)=281.52µs p(95)=315.93µs
    // iterations.....................: 119221 3973.800601/s
    // vus............................: 1      min=1         max=1   
    // vus_max........................: 1      min=1         max=1   
    // let response = http.get("http://localhost:8080/hello/nick") // micronaut no graalvm
    /*
     data_received..................: 19 MB  630 kB/s
     data_sent......................: 13 MB  417 kB/s
     http_req_blocked...............: avg=1.1µs    min=0s       med=1µs      max=804µs   p(90)=2µs      p(95)=2µs     
     http_req_connecting............: avg=1ns      min=0s       med=0s       max=187µs   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=185.46µs min=143µs    med=177µs    max=9.3ms   p(90)=216µs    p(95)=240µs   
       { expected_response:true }...: avg=185.46µs min=143µs    med=177µs    max=9.3ms   p(90)=216µs    p(95)=240µs   
     http_req_failed................: 0.00%  ✓ 0           ✗ 138953
     http_req_receiving.............: avg=15.08µs  min=9µs      med=14µs     max=817µs   p(90)=19µs     p(95)=22µs    
     http_req_sending...............: avg=4.97µs   min=3µs      med=4µs      max=437µs   p(90)=8µs      p(95)=9µs     
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=165.4µs  min=127µs    med=158µs    max=9.16ms  p(90)=191µs    p(95)=212µs   
     http_reqs......................: 138953 4631.535399/s
     iteration_duration.............: avg=212.02µs min=162.63µs med=203.24µs max=10.72ms p(90)=247.48µs p(95)=275.34µs
     iterations.....................: 138953 4631.535399/s
     vus............................: 1      min=1         max=1   
     vus_max........................: 1      min=1         max=1 
    */
    // let response = http.get("http://localhost:8090/hello") // go http
    /*
     data_received..................: 35 MB  1.2 MB/s
     data_sent......................: 24 MB  814 kB/s
     http_req_blocked...............: avg=1.07µs   min=0s      med=1µs     max=2.57ms p(90)=1µs     p(95)=2µs     
     http_req_connecting............: avg=0ns      min=0s      med=0s      max=149µs  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=75.21µs  min=53µs    med=71µs    max=9.08ms p(90)=86µs    p(95)=100µs   
       { expected_response:true }...: avg=75.21µs  min=53µs    med=71µs    max=9.08ms p(90)=86µs    p(95)=100µs   
     http_req_failed................: 0.00%  ✓ 0           ✗ 287343
     http_req_receiving.............: avg=14.31µs  min=8µs     med=14µs    max=534µs  p(90)=17µs    p(95)=19µs    
     http_req_sending...............: avg=5.08µs   min=3µs     med=4µs     max=2.12ms p(90)=7µs     p(95)=8µs     
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=55.82µs  min=40µs    med=52µs    max=9.02ms p(90)=64µs    p(95)=75µs    
     http_reqs......................: 287343 9577.531095/s
     iteration_duration.............: avg=100.73µs min=73.05µs med=95.34µs max=9.14ms p(90)=114.6µs p(95)=131.87µs
     iterations.....................: 287343 9577.531095/s
     vus............................: 1      min=1         max=1   
     vus_max........................: 1      min=1         max=1  
    */
    // let response = http.get("http://localhost:8080/api/v1/example/helloworld");
    /*
     data_received..................: 9.8 MB 328 kB/s
     data_sent......................: 7.7 MB 255 kB/s
     http_req_blocked...............: avg=2.24µs   min=1µs     med=2µs      max=1.17ms   p(90)=3µs      p(95)=3µs     
     http_req_connecting............: avg=2ns      min=0s      med=0s       max=184µs    p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=346.31µs min=96µs    med=216µs    max=995.25ms p(90)=325µs    p(95)=417µs   
       { expected_response:true }...: avg=346.31µs min=96µs    med=216µs    max=995.25ms p(90)=325µs    p(95)=417µs   
     http_req_failed................: 0.00%  ✓ 0           ✗ 72921
     http_req_receiving.............: avg=35µs     min=13µs    med=29µs     max=2.96ms   p(90)=53µs     p(95)=67µs    
     http_req_sending...............: avg=10.52µs  min=4µs     med=9µs      max=2.32ms   p(90)=15µs     p(95)=19µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=300.77µs min=76µs    med=174µs    max=995.18ms p(90)=266µs    p(95)=349µs   
     http_reqs......................: 72921  2430.549711/s
     iteration_duration.............: avg=402.72µs min=127.1µs med=269.93µs max=995.3ms  p(90)=395.05µs p(95)=498.31µs
     iterations.....................: 72921  2430.549711/s
     vus............................: 1      min=1         max=1  
     vus_max........................: 1      min=1         max=1  
    */
    // let response = http.get("http://localhost:80");
    /*
     data_received..................: 3.6 MB 119 kB/s
     data_sent......................: 1.8 MB 60 kB/s
     http_req_blocked...............: avg=2.35µs  min=1µs      med=2µs    max=960µs   p(90)=3µs    p(95)=4µs   
     http_req_connecting............: avg=8ns     min=0s       med=0s     max=203µs   p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.23ms  min=771µs    med=1.09ms max=23.24ms p(90)=1.42ms p(95)=1.83ms
       { expected_response:true }...: avg=1.23ms  min=771µs    med=1.09ms max=23.24ms p(90)=1.42ms p(95)=1.83ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 22960
     http_req_receiving.............: avg=51.04µs min=27µs     med=43µs   max=2.62ms  p(90)=74µs   p(95)=88µs  
     http_req_sending...............: avg=13.35µs min=6µs      med=12µs   max=490µs   p(90)=17µs   p(95)=19µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.16ms  min=727µs    med=1.04ms max=23.16ms p(90)=1.33ms p(95)=1.73ms
     http_reqs......................: 22960  765.252982/s
     iteration_duration.............: avg=1.29ms  min=813.48µs med=1.15ms max=23.32ms p(90)=1.51ms p(95)=1.94ms
     iterations.....................: 22960  765.252982/s
     vus............................: 1      min=1        max=1  
     vus_max........................: 1      min=1        max=1  
    */

};