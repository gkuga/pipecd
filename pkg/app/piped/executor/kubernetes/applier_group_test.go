// Copyright 2023 The PipeCD Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package kubernetes

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMakeKeyFromProviderLabels(t *testing.T) {
	testcases := []struct {
		name   string
		labels map[string]string
		want   string
	}{
		{
			name: "empty",
			want: "",
		},
		{
			name: "one label",
			labels: map[string]string{
				"foo": "foo-1",
			},
			want: "foo:foo-1",
		},
		{
			name: "multiple labels",
			labels: map[string]string{
				"foo": "foo-1",
				"bar": "bar-1",
			},
			want: "bar:bar-1,foo:foo-1",
		},
		{
			name: "multiple labels in the reverse order",
			labels: map[string]string{
				"bar": "bar-1",
				"foo": "foo-1",
			},
			want: "bar:bar-1,foo:foo-1",
		},
	}

	for _, tc := range testcases {
		t.Run(tc.name, func(t *testing.T) {
			got := makeKeyFromProviderLabels(tc.labels)
			assert.Equal(t, tc.want, got)
		})
	}
}
