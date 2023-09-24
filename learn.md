Profiling
    apache performance ->  https://httpd.apache.org/docs/2.4/programs/ab.html
    command -> ab -k -c 20 -n 250 "http://localhost:3003/auth?username=matt&password=password"
        -c = concurrency
        -n = total requests
        -k = Enable the HTTP KeepAlive feature, i.e., perform multiple requests within one HTTP session. Default is no KeepAlive.


    node --prof-process isolate-0xnnnnnnnnnnnn-v8.log > processed.txt
    can create flamegraph

Docker
    docker command - docker build . -t cdn:latest

Misc
    hit api from cmd - curl -i localhost:49160/newUser