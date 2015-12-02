module.exports = {

  makePod: function (namespace, name) {
    return {
      kind: 'Pod',
      metadata: {
        name: name,
        namespace: namespace,
        labels: {
          name: name
        }
      },
      spec: {
        containers: [
          {
            name: 'demo-container',
            image: 'busybox',
            imagePullPolicy: 'Always',
          }
        ],
        dnsPolicy: 'ClusterFirst',
        restartPolicy: 'Always'
      }
    }
  },

  makeNamespace: function (name) {
    return {
      kind: 'Namespace',
      metadata: {
        name: name,
        labels: {
          name: name
        }
      }
    }
  },

  makeService: function (namespace, name, pod) {
    return {
      kind: 'Service',
      metadata: {
        name: name,
        namespace: namespace,
        labels: {
          name: name
        } 
      }, 
      spec: {
        selector: {
          name: pod
        },
        ports: [
          {
            port: 80,
            targetPort: 80,
            protocol: 'TCP'
          }
        ],
        type: 'NodePort',
        sessionAffinity: 'None'
      }
    }
  }
}
