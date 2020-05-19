class CustomApiClient extends ApiClient {


	callApi(path, httpMethod, pathParams, queryParams, collectionQueryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType, callback) {
		return fetch(`${this.basePath}${path}`,
			{
				method: httpMethod
			});
	}
}
