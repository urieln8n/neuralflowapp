module red-nflow

go 1.24.1

tool (
	github.com/bufbuild/buf/cmd/buf
	github.com/cosmos/cosmos-proto/cmd/protoc-gen-go-pulsar
	github.com/cosmos/gogoproto/protoc-gen-gocosmos
	github.com/cosmos/gogoproto/protoc-gen-gogo
	github.com/golangci/golangci-lint/cmd/golangci-lint
	github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
	github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2
	golang.org/x/tools/cmd/goimports
	google.golang.org/grpc/cmd/protoc-gen-go-grpc
	google.golang.org/protobuf/cmd/protoc-gen-go
)
