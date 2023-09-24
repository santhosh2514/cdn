https://www.npmjs.com/package/pm2 ###process manager

##without cluster
ab -c100 -t10 http://localhost:3003/compute
This is ApacheBench, Version 2.3 <$Revision: 1901567 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Finished 3010 requests


Server Software:        
Server Hostname:        localhost
Server Port:            3003

Document Path:          /compute
Document Length:        2 bytes

Concurrency Level:      100
Time taken for tests:   10.256 seconds
Complete requests:      3010
Failed requests:        0
Total transferred:      238777 bytes
HTML transferred:       6202 bytes
Requests per second:    293.48 [#/sec] (mean)
Time per request:       340.738 [ms] (mean)
Time per request:       3.407 [ms] (mean, across all concurrent requests)
Transfer rate:          22.74 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    6   2.1      6       9
Processing:     8  324  16.6    323     369
Waiting:        4  179  92.6    180     368
Total:          9  330  16.5    329     371

Percentage of the requests served within a certain time (ms)
  50%    329
  66%    329
  75%    330
  80%    330
  90%    330
  95%    343
  98%    370
  99%    370
 100%    371 (longest request)

##With cluster
ab -c100 -t10 http://localhost:3003/compute
This is ApacheBench, Version 2.3 <$Revision: 1901567 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 5000 requests
Completed 10000 requests
Finished 14930 requests


Server Software:        
Server Hostname:        localhost
Server Port:            3003

Document Path:          /compute
Document Length:        2 bytes

Concurrency Level:      100
Time taken for tests:   10.000 seconds
Complete requests:      14930
Failed requests:        0
Total transferred:      1150226 bytes
HTML transferred:       29876 bytes
Requests per second:    1492.97 [#/sec] (mean)
Time per request:       66.981 [ms] (mean)
Time per request:       0.670 [ms] (mean, across all concurrent requests)
Transfer rate:          112.32 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.9      0      36
Processing:    12   66   8.0     66     164
Waiting:       10   62   7.1     61     151
Total:         12   67   7.9     66     164

Percentage of the requests served within a certain time (ms)
  50%     66
  66%     69
  75%     70
  80%     72
  90%     75
  95%     79
  98%     86
  99%     93
 100%    164 (longest request)
