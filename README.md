# gql-fedarations

Graphql Fedarations

## Installation

1. install docker desktop
2. [Enable kubernetes](https://images.app.goo.gl/ZASanUg5PjCkFCJZ7)
3. [Install Skaffold](https://skaffold.dev/docs/install/)
4. Install a local nginx for kubernetes run
   this ``kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.2/deploy/static/provider/cloud/deploy.yaml``
5. [More info here on the kubernetes install](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)
6. go to the root dir `gql-federations/`
7. run `yarn sk:l`
8. this will run skaffold, which will build all the containers and create a local cluster
9. Edit you `/etc/hosts` file and add the following `127.0.0.1 local.swfed.dev`
10. This create a local dns name to your the nginx pod
11. to verify everything is up and running run `kubectl get services` and or `kubectl get pods`
12. When you see everything is running
13. Nextjs app - `local.swfed.dev`
14. Gql app - `local.swfed.dev/graphql`

chrome://flags/#allow-insecure-localhost

k get --all-namespaces ingress -o json 2> /dev/null| jq -r '.items[] | .spec.rules[] | .host as $host |
.http.paths[] | ( $host + .path)' | sort | grep -v ^/

thisisunsafe

check if ingress is up and running
`k describe ing ingress-srv`

### Code gen in the cars-client app

The codegen.yml points to the cars-client Nodeport `localhost:30115`, which is the super graph service. You can verify
that this is running and looks something like this when running `kubectl get services`

```text

projects/maitriyogin/gql-fedarations on main [+!?] via ⬢ v16.13.1 via 💎  3.1.0
➔ k get services
NAME                  TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)           AGE
car-mongo-srv         ClusterIP   10.100.52.106    <none>        27017/TCP         33s
car-node-srv          NodePort    10.102.242.241   <none>        4001:30111/TCP    33s
car-srv               ClusterIP   10.105.140.3     <none>        4001/TCP          33s
cars-client-srv       ClusterIP   10.97.2.178      <none>        3000/TCP          33s
charger-mongo-srv     ClusterIP   10.101.109.96    <none>        27017/TCP         33s
charger-node-srv      NodePort    10.103.17.11     <none>        4000:30112/TCP    33s
charger-srv           ClusterIP   10.100.109.1     <none>        4000/TCP          33s
esl-query-node-srv    NodePort    10.97.149.146    <none>        4003:30115/TCP    33s
esl-query-srv         ClusterIP   10.97.215.191    <none>        4003/TCP          33s
kubernetes            ClusterIP   10.96.0.1        <none>        443/TCP           26d
user-mongo-node-srv   NodePort    10.100.241.52    <none>        27017:30310/TCP   33s
user-mongo-srv        ClusterIP   10.100.255.177   <none>        27017/TCP         33s
user-node-srv         NodePort    10.108.185.42    <none>        4002:30110/TCP    33s
user-srv              ClusterIP   10.103.24.201    <none>        4002/TCP          33s

```